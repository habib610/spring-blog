package com.example.springblog.services;

import com.example.springblog.payload.UserDto;
import com.example.springblog.response.UserDetailResponse;

import java.util.List;

public interface UserService {
    public UserDetailResponse registerUser(UserDto user);
    UserDto createUser(UserDto user);

    UserDto updateUser(UserDto user, Long userId);

    UserDetailResponse getUserByUserId(Long userId);

    List<UserDetailResponse> getAllUserList();

    void deleteUser(Long userId);

}
