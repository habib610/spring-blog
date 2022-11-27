package com.example.springblog.controllers;

import com.example.springblog.payload.PostDto;
import com.example.springblog.payload.PostResponse;
import com.example.springblog.response.ApiResponse;
import com.example.springblog.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {
    @Autowired
    private PostServices postServices;
//CREATE new post
    @PostMapping("/user/{userId}/category/{categoryId}/posts")
    public ResponseEntity<PostDto> createNewPost(@Valid
                                                 @RequestBody PostDto postDto,
                                                 @PathVariable Long userId,
                                                 @PathVariable Long categoryId
    ) {
        PostDto postDto1 = postServices.createPost(postDto, userId, categoryId);
        return new ResponseEntity<>(postDto1, HttpStatus.CREATED);
    }

//    GET all posts
    @GetMapping("/posts")
    public ResponseEntity<PostResponse> getAllPosts(
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize,
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber

            ){
        PostResponse postDtoList = postServices.getAllPosts( pageNumber, pageSize);
        return ResponseEntity.ok(postDtoList);
    }
    //    DELETE post by postID
    @GetMapping("/posts/{postId}")
    public ResponseEntity<List<PostDto>> getPostsByCategoryId(@PathVariable Long postId){
      List<PostDto>  postDto =  postServices.getAllPostByCategoryId(postId);
        return new ResponseEntity<>(postDto,HttpStatus.OK);
    }
//    DELETE post by postID
    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse> deletePostById(@PathVariable Long postId){
        postServices.deletePost(postId);
        return new ResponseEntity<>(new ApiResponse("Post with id "+ postId + " has been deleted", true), HttpStatus.OK);
    }


    //    GET post by Category
    @GetMapping("/category/{categoryId}/posts")
    public ResponseEntity<List<PostDto>> getAllPostByCategoryId(@PathVariable Long categoryId){
        List<PostDto>  postDto =  postServices.getAllPostByCategoryId(categoryId);
        return new ResponseEntity<>(postDto,HttpStatus.OK);
    }

    //    GET post by User
    @GetMapping("/users/{userId}/posts")
    public ResponseEntity<List<PostDto>> getAllPostByUserId(@PathVariable Long userId){
        List<PostDto>  postDto =  postServices.getAllPostByUserId(userId);
        return new ResponseEntity<>(postDto,HttpStatus.OK);
    }
    //    DELETE post by postID
    @PutMapping("/posts/{postId}")
    public ResponseEntity<PostDto> updatePost(@Valid @RequestBody PostDto postDto, @PathVariable Long postId){
     PostDto postDto1 =   postServices.updatePost(postDto, postId);
        return new ResponseEntity<>(postDto1, HttpStatus.OK);
    }
}
