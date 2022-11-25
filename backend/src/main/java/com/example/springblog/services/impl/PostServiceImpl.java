package com.example.springblog.services.impl;

import com.example.springblog.entities.Category;
import com.example.springblog.entities.Post;
import com.example.springblog.entities.Users;
import com.example.springblog.exceptions.ResourceNotFoundException;
import com.example.springblog.payload.PostDto;
import com.example.springblog.repositories.CategoryRepository;
import com.example.springblog.repositories.PostRepository;
import com.example.springblog.repositories.UserRepository;
import com.example.springblog.services.PostServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
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
        post.setImageName("default.jpg");
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
        existingPost.setImageName(post.getImageName());
        existingPost.setContent(post.getContent());
        existingPost.setTitle(post.getTitle());
        Post savedPost = postRepository.save(existingPost);

        return modelMapper.map(savedPost, PostDto.class);
    }

    //DELETE post by post ID
    @Override
    public void deletePost(Long postId) {

        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
        postRepository.delete(post);
    }

    //GET all posts
    @Override
    public List<PostDto> getAllPosts() {
        List<Post> postList = postRepository.findAll();
        List<PostDto> postDtoList = postList
                .stream()
                .map(post -> modelMapper
                        .map(post, PostDto.class))
                .collect(Collectors.toList());
        return postDtoList;
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

}
