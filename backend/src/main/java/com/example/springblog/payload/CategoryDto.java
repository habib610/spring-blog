package com.example.springblog.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class CategoryDto {

    private Long categoryId;

    @NotBlank
    @Size(min = 5, max = 50, message = "Title size must be min 5 chars and max is 50 chars")
    private String categoryTitle;

    @NotBlank
    @Size(min = 5, max = 100, message = "Description size must be min 5 chars and max is 100 chars")
    private String categoryDescription;
}
