package com.example.springblog.services.impl;

import com.example.springblog.entities.Category;
import com.example.springblog.entities.Post;
import com.example.springblog.entities.Users;
import com.example.springblog.exceptions.ResourceNotFoundException;
import com.example.springblog.payload.PostDto;
import com.example.springblog.payload.PostResponse;
import com.example.springblog.repositories.CategoryRepository;
import com.example.springblog.repositories.PostRepository;
import com.example.springblog.repositories.UserRepository;
import com.example.springblog.services.PostServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostServices {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    //    Create new post
    @Override
    public PostDto createPost(PostDto postDto, Long userId, Long categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if (!category.isPresent()) throw new ResourceNotFoundException("Category", "id", categoryId);

        Users user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        Post post = modelMapper.map(postDto, Post.class);

//        post.setImageName("default.jpg");
        post.setAddedDate(new Date());
        post.setUsers(user);
        post.setCategory(category.get());

        Post savedPost = postRepository.save(post);
        return modelMapper.map(savedPost, PostDto.class);
    }

    //UPDATE post by postId
    @Override
    public PostDto updatePost(PostDto post, Long postId) {
        Post existingPost = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));

        Category category = categoryRepository.findById(post.getCategory().getCategoryId()).get();


        existingPost.setImageName(post.getImageName());
        existingPost.setContent(post.getContent());
        existingPost.setTitle(post.getTitle());
        existingPost.setCategory(category);
        Post savedPost = postRepository.save(existingPost);

        return modelMapper.map(savedPost, PostDto.class);
    }

    //DELETE post by post ID
    @Override
    public void deletePost(Long postId) {

        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
        postRepository.delete(post);
    }

    //    GET post by Id
    @Override
    public PostDto getPostById(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));

        return modelMapper.map(post, PostDto.class);
    }

    //GET all posts
    @Override
    public PostResponse getAllPosts(Integer pageNumber, Integer pageSize, String sort, String order) {
        Sort sorted = Objects.equals(order, "asc") ? Sort.by(sort).ascending() : Sort.by(sort).descending();

        Pageable pageable = PageRequest.of(pageNumber, pageSize, sorted);

        Page<Post> page = postRepository.findAll(pageable);
        List<Post> postList = page.getContent();
        List<PostDto> postDtoList = postList
                .stream()
                .map(post -> modelMapper
                        .map(post, PostDto.class))
                .collect(Collectors.toList());

        PostResponse postResponse = new PostResponse();
        postResponse.setContent(postDtoList);
        postResponse.setPageNumber(page.getNumber());
        postResponse.setPageSize(page.getSize());
        postResponse.setTotalElements(page.getTotalElements());
        postResponse.setLastPage(page.isLast());
        postResponse.setFirstPage(page.isFirst());
        return postResponse;
    }

    //    GET post by categoryId
    @Override
    public List<PostDto> getAllPostByCategoryId(Long categoryId) {
        Category category = categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        List<Post> postList = postRepository.getAllByCategory(category);

        return postList.stream().map(post -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
    }

    //    GET post by userId
    @Override
    public List<PostDto> getAllPostByUserId(Long userId) {
        Users users = userRepository
                .findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        List<Post> postList = postRepository.getAllByUsers(users);

        return postList.stream().map(post -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());

    }

    //    GET post by keyword
    @Override
    public List<PostDto> getPostByTitle(String keyword) {
        List<Post> postList = postRepository
                .getByTitleContaining(keyword);

        return postList.stream().map(post -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<PostDto> getTopPosts() {
        List<Post> postDtoList = postRepository.getPostByCommentsGreaterThan();
        return postDtoList.stream().map(post -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
    }

}
