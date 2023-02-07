package com.example.springblog.controllers;

import com.example.springblog.AppConstants;
import com.example.springblog.payload.CategoryDto;
import com.example.springblog.response.ApiResponse;
import com.example.springblog.services.CategoryServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(path = "/api/category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryServices categoryServices;

    public final Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    //    POST - Create new category
    @PostMapping("/")
    public ResponseEntity<CategoryDto> createNewCategory(@Valid @RequestBody CategoryDto categoryDto) {
        CategoryDto categoryDto1 = categoryServices.createCategory(categoryDto);
        return new ResponseEntity<>(categoryDto1, HttpStatus.CREATED);
    }

    //    GET - Get single categoryById
    @GetMapping("/{categoryId}")
    public ResponseEntity<CategoryDto> getCategoryByCategoryId(@PathVariable Long categoryId) {
        CategoryDto category = categoryServices.getCategoryById(categoryId);
        return ResponseEntity.ok(category);
    }

    //    GET - Get all category
    @GetMapping("/")
    public ResponseEntity<List<CategoryDto>> getCategoryByCategoryId() {
        return ResponseEntity.ok(categoryServices.getAllCategory());
    }

    //    UPDATE  - Update category
    @PutMapping("/{categoryId}")
    public ResponseEntity<CategoryDto> updateCategory(
            @Valid @RequestBody CategoryDto categoryDto,
            @PathVariable Long categoryId) {
        CategoryDto updateCategory = categoryServices.updateCategory(categoryDto, categoryId);
        return new ResponseEntity<>(updateCategory, HttpStatus.OK);
    }

    //    DELETE  - Delete  categoryById
    @DeleteMapping("/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable
                                                      Long categoryId) {
        LOGGER.info("Inside CATEGORY DELETE METHOD");
        categoryServices.deleteCategory(categoryId);
        return new ResponseEntity<>(new ApiResponse("Category with id: " + categoryId + " has been deleted", true), HttpStatus.OK);
    }
}
