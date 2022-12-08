package com.example.springblog.controllers;


import com.example.springblog.exceptions.ApiException;
import com.example.springblog.payload.JwtAuthRequest;
import com.example.springblog.payload.JwtAuthResponse;
import com.example.springblog.payload.UserDto;
import com.example.springblog.security.JwtTokenHelper;
import com.example.springblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private JwtTokenHelper jwtTokenHelper;
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> createToken(
            @RequestBody JwtAuthRequest jwtAuthRequest
    ) throws Exception {
        authenticateUser(jwtAuthRequest.getUsername(), jwtAuthRequest.getPassword());
        UserDetails userDetails = userDetailsService.loadUserByUsername(jwtAuthRequest.getUsername());
        String token = jwtTokenHelper.generateToken(userDetails);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setToken(token);

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto){
        UserDto userDto1=  userService.registerUser(userDto);

        return  new ResponseEntity<>(userDto1, HttpStatus.CREATED);
    }

    private void authenticateUser(String username, String password) throws Exception {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        } catch (BadCredentialsException exception) {
            System.out.println("Invalid username details");
            throw new ApiException("Invalid Username or Password");
        }


    }
}