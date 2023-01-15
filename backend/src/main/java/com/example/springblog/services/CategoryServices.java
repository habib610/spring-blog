package com.example.springblog.services;


import com.example.springblog.payload.CategoryDto;

import java.util.List;

public interface CategoryServices {
    //    POST - Create new category
    CategoryDto createCategory(CategoryDto userDto);

    //    GET - Get single categoryById
    CategoryDto getCategoryById(Long categoryId);

    //    GET - Get all category
    List<CategoryDto> getAllCategory();

    //    UPDATE  - Update category
    CategoryDto updateCategory(CategoryDto userDto, Long categoryId);

    //    DELETE  - Delete  categoryById
    void deleteCategory(Long categoryId);
}
