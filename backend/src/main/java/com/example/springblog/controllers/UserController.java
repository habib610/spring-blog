package com.example.springblog.controllers;

import com.example.springblog.payload.UserDto;
import com.example.springblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
     UserDto createdUser =   userService.createUser(userDto);
     return new ResponseEntity<>(createdUser, HttpStatus.CREATED );
    }
}
