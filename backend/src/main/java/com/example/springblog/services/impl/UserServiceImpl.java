package com.example.springblog.services.impl;

import com.example.springblog.entities.Users;
import com.example.springblog.payload.UserDto;
import com.example.springblog.repositories.UserRepository;
import com.example.springblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        Users users = convertDtoToUsers(userDto);
        Users savedUser = userRepository.save(users);
        return convertUsersToDto(savedUser);

    }

    @Override
    public UserDto updateUser(UserDto user, Long userId) {
        return null;
    }

    @Override
    public UserDto getUserByUserId(Long userId) {
        return null;
    }

    @Override
    public List<UserDto> getAllUserList() {
        return null;
    }

    @Override
    public void deleteUser(Long userId) {

    }
    private Users convertDtoToUsers(UserDto userDto){
        Users users = new Users();
        users.setId(userDto.getId());
        users.setName(userDto.getName());
        users.setAbout(userDto.getAbout());
        users.setEmail(userDto.getEmail());
        users.setPassword(userDto.getPassword());
        return  users;
    }

    private UserDto convertUsersToDto(Users users){
        UserDto userDto = new UserDto();

        userDto.setId(users.getId());
        userDto.setName(users.getName());
        userDto.setAbout(users.getAbout());
        userDto.setEmail(users.getEmail());
        userDto.setPassword(users.getPassword());
        return  userDto;
    }
}
