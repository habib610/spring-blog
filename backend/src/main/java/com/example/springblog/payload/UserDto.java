package com.example.springblog.payload;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Long id;

    @NotBlank
    @Size(min = 4, max = 100, message = "User name must be minimum 4 characters and max 100 characters")
    private String name;

    @NotBlank
    @Size(min = 4, max = 500, message = "About must be minimum 4 characters and max 500 characters")
    private String about;

    @NotNull
    @Email(message = "Valid email required!")
    private String email;

    @JsonIgnore
    @NotBlank
    @Size(min = 4, max = 10, message = "Password must be minimum 4 characters and max 10 characters")
    private String password;

}
