package com.example.springblog.services;

import com.example.springblog.entities.Post;
import com.example.springblog.payload.PostDto;

import java.util.List;

public interface PostServices {
//    Create Post
PostDto createPost(PostDto postDto, Long userId, Long categoryId);

//    Update Post
    Post updatePost(Post post, Long postId);

//    Delete Post
    void deletePost (Long postId);

//    Get All Posts
    List<Post> getAllPosts();

//   Get All Post by category
    List<Post> getAllPostByCategory(Long categoryId);

    //   Get All Post by user
    List<Post> getAllPostByUser(Long userId);

    //   Search Post by keyword
    List<Post> searchPostByUser(String keyword);

}
