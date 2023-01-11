package com.example.springblog.services;

import com.example.springblog.payload.CommentDto;

public interface CommentService {
    CommentDto createComment(CommentDto commentDto, Long postId );
    void deleteComment(Long commentId );
}
