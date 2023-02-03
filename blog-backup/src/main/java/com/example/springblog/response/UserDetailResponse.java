package com.example.springblog.response;

import com.example.springblog.payload.RoleDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties(value = { "password" })
public class UserDetailResponse {

    private Long id;

    private String name;

    private String about;

    private String email;
    private String password;

    private Set<RoleDto> roles = new HashSet<>();
}
