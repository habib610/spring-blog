package com.example.springblog.services.impl;

import com.example.springblog.entities.Comment;
import com.example.springblog.entities.Post;
import com.example.springblog.exceptions.ResourceNotFoundException;
import com.example.springblog.payload.CommentDto;
import com.example.springblog.repositories.CommentRepository;
import com.example.springblog.repositories.PostRepository;
import com.example.springblog.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
   private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public CommentDto createComment(CommentDto commentDto, Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
        Comment comment = modelMapper.map(commentDto, Comment.class);
        comment.setPost(post);
        Comment savedComment = commentRepository.save(comment);

        return modelMapper.map(savedComment, CommentDto.class);
    }

    @Override
    public void deleteComment(Long commentId) {
       Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("Comment", "id", commentId));
        commentRepository.delete(comment);
    }
}
