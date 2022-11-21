package com.example.springblog.services.impl;

import com.example.springblog.entities.Category;
import com.example.springblog.exceptions.ResourceNotFoundException;
import com.example.springblog.payload.CategoryDto;
import com.example.springblog.repositories.CategoryRepository;
import com.example.springblog.services.CategoryServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryServices {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    //    POST - Create new category
    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = convertCategoryDtoToCategory(categoryDto);
        Category savedCategory = categoryRepository.save(category);
        return convertCategoryToCategoryDto(savedCategory);
    }

    //    GET - Get single categoryById
    @Override
    public CategoryDto getCategoryById(Long categoryId) {
        Category category = categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        return convertCategoryToCategoryDto(category);
    }

    //    GET - Get all category
//@desc: check this convertion
    @Override
    public List<CategoryDto> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDto> categoryDtos = categories
                .stream()
                .map(this::convertCategoryToCategoryDto)
                .toList();
        return categoryDtos;
    }

    //    UPDATE  - Update category
    @Override
    public CategoryDto updateCategory(CategoryDto categoryDto, Long categoryId) {
        Category category = categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        category.setCategoryTitle(categoryDto.getCategoryTitle());
        category.setCategoryDescription(category.getCategoryDescription());
        Category savedCategory = categoryRepository.save(category);
        return convertCategoryToCategoryDto(savedCategory);
    }

    //    DELETE  - Delete  categoryById
    @Override
    public void deleteCategory(Long categoryId) {
        Category category = categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        categoryRepository.delete(category);
    }

    public Category convertCategoryDtoToCategory(CategoryDto categoryDto) {
        return modelMapper.map(categoryDto, Category.class);
    }

    public CategoryDto convertCategoryToCategoryDto(Category category) {
        return modelMapper.map(category, CategoryDto.class);
    }


}
