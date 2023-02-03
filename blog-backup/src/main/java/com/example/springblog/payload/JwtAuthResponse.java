package com.example.springblog.payload;

import com.example.springblog.entities.Users;
import lombok.Data;

@Data
public class JwtAuthResponse {
    private String token;
    private UserDto user;
}