package com.example.springblog.services;

import com.example.springblog.entities.Post;
import com.example.springblog.payload.PostDto;
import com.example.springblog.payload.PostResponse;

import java.util.List;

public interface PostServices {
    //    Create Post
    PostDto createPost(PostDto postDto, Long userId, Long categoryId);

    //    Update Post
    PostDto updatePost(PostDto post, Long postId);

    //    Delete Post
    void deletePost(Long postId);

    //    Get All Posts
    PostResponse getAllPosts(Integer pageNumber, Integer pageSize);

    //   Get All Post by category
    List<PostDto> getAllPostByCategoryId(Long categoryId);

    //   Get All Post by user
    List<PostDto> getAllPostByUserId(Long userId);


}
