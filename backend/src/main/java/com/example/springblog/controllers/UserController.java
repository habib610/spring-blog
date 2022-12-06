package com.example.springblog.controllers;

import com.example.springblog.AppConstants;
import com.example.springblog.payload.UserDto;
import com.example.springblog.response.ApiResponse;
import com.example.springblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = AppConstants.USER_PATH)
public class UserController {
    @Autowired
    private UserService userService;

    //    POST - create a new user
    @PostMapping(AppConstants.USER_BASE)
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto) {
        UserDto createdUser = userService.createUser(userDto);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED); // One way to send response with body and HttpStatus
    }


    //    GET - get all users
    @GetMapping(AppConstants.USER_BASE)
    public ResponseEntity<List<UserDto>> getListOfUsers() {
        return ResponseEntity.ok(userService.getAllUserList()); // another way to send response with body and HttpStatus
    }

    //    GET - get single user by userId
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserByUserId(userId));
    }

    //    PUT - update user by userId
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUserByUserId(
            @Valid
            @RequestBody UserDto userDto,
            @PathVariable("userId") Long uId) { // name path variable anything now
        UserDto updateUser = userService.updateUser(userDto, uId);
        return ResponseEntity.ok(updateUser);
    }

    //    PUT - update user by userId
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUserByUserId(
            @PathVariable("userId") Long uId) { // name path variable anything now
        userService.deleteUser(uId);
//            Returns JSON Object using custom class
        return ResponseEntity.ok(
                new ApiResponse("User Has been Deleted Successfully", true));

//       Another simple way to  Returns JSON Object using Map
//        return new  ResponseEntity(Map.of("message" , "User has been deleted successfully"), HttpStatus.OK);

    }
}
