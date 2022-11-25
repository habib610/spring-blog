package com.example.springblog.controllers;

import com.example.springblog.payload.PostDto;
import com.example.springblog.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class PostController {
    @Autowired
    private PostServices postServices;

    @PostMapping("/user/{userId}/category/{categoryId}/posts")
    public ResponseEntity<PostDto> createNewPost(@Valid
                                                 @RequestBody PostDto postDto,
                                                 @PathVariable Long userId,
                                                 @PathVariable Long categoryId
    ) {
        PostDto postDto1 = postServices.createPost(postDto, userId, categoryId);
        return new ResponseEntity<>(postDto1, HttpStatus.CREATED);
    }
}
