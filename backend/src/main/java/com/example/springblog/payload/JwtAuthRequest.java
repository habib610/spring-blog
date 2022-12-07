package com.example.springblog.payload;

import lombok.Data;

@Data
public class JwtAuthRequest {
    //    consider email as username
    private String username;
    private String password;
}
