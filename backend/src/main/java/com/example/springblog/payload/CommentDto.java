package com.example.springblog.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CommentDto {
    private Long id;
    @NotBlank
    @Size(min = 5, max = 100, message = "Comment size must be min 5 chars and max is 100 chars")
    private String content;
}
