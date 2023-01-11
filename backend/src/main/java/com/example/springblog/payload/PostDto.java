package com.example.springblog.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long id;
    @NotBlank
    @Size(min = 5, max = 150, message = "Title size must be min 5 chars and max is 150 chars")
    private String title;
    @NotBlank
    @Size(min = 5, max = 10000, message = "Content size must be min 5 chars and max is 10000 chars")
    private String content;
    private String imageName;
    private Date addedDate;

    private CategoryDto category;
    private UserDto users;

    private Set<CommentDto> comments = new HashSet<>();
}
