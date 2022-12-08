package com.example.springblog.services;

import com.example.springblog.payload.UserDto;

import java.util.List;

public interface UserService {

    UserDto registerUser(UserDto user);
    UserDto createUser(UserDto user);

    UserDto updateUser(UserDto user, Long userId);

    UserDto getUserByUserId(Long userId);

    List<UserDto> getAllUserList();

    void deleteUser(Long userId);

}
