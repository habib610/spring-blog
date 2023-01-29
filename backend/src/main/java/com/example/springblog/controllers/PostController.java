package com.example.springblog.controllers;

import com.example.springblog.entities.Post;
import com.example.springblog.payload.PostDto;
import com.example.springblog.payload.PostResponse;
import com.example.springblog.response.ApiResponse;
import com.example.springblog.services.FileService;
import com.example.springblog.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class PostController {


    @Value("${project.image}")
    private String filePath;

    @Autowired
    private PostServices postServices;

    @Autowired
    private FileService fileService;

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
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
            @RequestParam(value = "sort", defaultValue = "id", required = false) String sort,
            @RequestParam(value = "order", defaultValue = "desc", required = false) String order
    ) {
        PostResponse postDtoList = postServices.getAllPosts(pageNumber, pageSize, sort, order);
        return ResponseEntity.ok(postDtoList);
    }

//    Get Top posts ByPostId
    @GetMapping("/posts/top")
    public ResponseEntity<List<PostDto>> getTopPosts(){
        List<PostDto> postResponse = postServices.getTopPosts();
        return ResponseEntity.ok(postResponse);
    }


    //    DELETE post by postID
    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse> deletePostById(@PathVariable Long postId) {
        postServices.deletePost(postId);
        return new ResponseEntity<>(new ApiResponse("Post with id " + postId + " has been deleted", true), HttpStatus.OK);
    }

    //    GET post by postID
    @GetMapping("/posts/{postId}")
    public ResponseEntity<PostDto> getPostByPostId(@PathVariable Long postId) {
        PostDto postDto = postServices.getPostById(postId);
        return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    //    GET post by Category
    @GetMapping("/category/{categoryId}/posts")
    public ResponseEntity<List<PostDto>> getAllPostByCategoryId(@PathVariable Long categoryId) {
        List<PostDto> postDto = postServices.getAllPostByCategoryId(categoryId);
        return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    //    GET post by User
    @GetMapping("/users/{userId}/posts")
    public ResponseEntity<List<PostDto>> getAllPostByUserId(@PathVariable Long userId) {
        List<PostDto> postDto = postServices.getAllPostByUserId(userId);
        return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    //    DELETE post by postID
    @PutMapping("/posts/{postId}")
    public ResponseEntity<PostDto> updatePost(@Valid @RequestBody PostDto postDto, @PathVariable Long postId) {
        PostDto postDto1 = postServices.updatePost(postDto, postId);
        return new ResponseEntity<>(postDto1, HttpStatus.OK);
    }

    // GET search by title
    @GetMapping("/posts/search/{keyword}")
    public ResponseEntity<List<PostDto>> searchPostByTitle(@PathVariable String keyword) {
        List<PostDto> postDto = postServices.getPostByTitle(keyword);
        return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    //    File uploade services
    @PostMapping("/posts/image/upload/{postId}")
    public ResponseEntity<PostDto> uploadImage(
            @RequestParam("image") MultipartFile image,
            @PathVariable Long postId
    ) throws IOException {
        PostDto postDto = postServices.getPostById(postId);
        String fileName = fileService.uploadFile(filePath, image);
        postDto.setImageName(fileName);
        PostDto updatePost = postServices.updatePost(postDto, postId);

        return new ResponseEntity<>(updatePost, HttpStatus.OK);
    }


    @GetMapping(value = "/post/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(
            @PathVariable String imageName,
            HttpServletResponse response) throws IOException {
        InputStream resource = fileService.getFileResource(filePath, imageName);

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }
}
