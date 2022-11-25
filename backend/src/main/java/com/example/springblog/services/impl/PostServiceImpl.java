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

    @Override
    public PostDto createPost(PostDto postDto, Long userId, Long categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(!category.isPresent()) throw new ResourceNotFoundException("Category", "id", categoryId);

        Users user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));


        Post post = modelMapper.map(postDto, Post.class);
        post.setImageName("default.jpg");
        post.setAddedDate(new Date());
        post.setUsers(user);
        post.setCategory(category.get());

        Post savedPost = postRepository.save(post);
        return modelMapper.map(savedPost, PostDto.class);
    }

    @Override
    public Post updatePost(Post post, Long postId) {
        return null;
    }

    @Override
    public void deletePost(Long postId) {

    }

    @Override
    public List<Post> getAllPosts() {
        return null;
    }

    @Override
    public List<Post> getAllPostByCategory(Long categoryId) {
        return null;
    }

    @Override
    public List<Post> getAllPostByUser(Long userId) {
        return null;
    }

    @Override
    public List<Post> searchPostByUser(String keyword) {
        return null;
    }
}
