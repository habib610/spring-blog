package com.example.springblog.services.impl;

import com.example.springblog.AppConstants;
import com.example.springblog.entities.Role;
import com.example.springblog.entities.Users;
import com.example.springblog.exceptions.ResourceNotFoundException;
import com.example.springblog.payload.UserDto;
import com.example.springblog.repositories.RoleRepository;
import com.example.springblog.repositories.UserRepository;
import com.example.springblog.response.UserDetailResponse;
import com.example.springblog.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserDetailResponse registerUser(UserDto userDto) {
        Users user = modelMapper.map(userDto, Users.class);

//         Encode the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

//         Set the role
        Role role = roleRepository.findById(AppConstants.ROLE_USER).get();
        user.getRoles().add(role);

        Users savedUser = userRepository.save(user);


        return modelMapper.map(savedUser, UserDetailResponse.class);
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        Users users = convertDtoToUsers(userDto);
        Users savedUser = userRepository.save(users);
        return convertUsersToDto(savedUser);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Long userId) {
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        users.setPassword(userDto.getPassword());
        users.setName(userDto.getName());
        users.setEmail(userDto.getEmail());
        users.setAbout(userDto.getAbout());
        Users users1 = userRepository.save(users);
        UserDto userDto1 = this.convertUsersToDto(users1);
        return userDto1;
    }

    @Override
    public UserDetailResponse getUserByUserId(Long userId) {
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        return modelMapper.map(users, UserDetailResponse.class);

    }

    @Override
    public List<UserDetailResponse> getAllUserList() {
        List<Users> users = userRepository.findAll();
        List<UserDetailResponse> userResponse = users.stream()
                .map(usr -> this.modelMapper.map(usr, UserDetailResponse.class))
                .collect(Collectors.toList());
        return userResponse;
    }

    @Override
    public void deleteUser(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        userRepository.delete(user);
    }

    private Users convertDtoToUsers(UserDto userDto) {
        Users users = modelMapper.map(userDto, Users.class);
//        Users users = new Users();
//        users.setId(userDto.getId());
//        users.setName(userDto.getName());
//        users.setAbout(userDto.getAbout());
//        users.setEmail(userDto.getEmail());
//        users.setPassword(userDto.getPassword());
        return users;
    }

    private UserDto convertUsersToDto(Users users) {
        UserDto userDto = modelMapper.map(users, UserDto.class);
        return userDto;
    }

}
