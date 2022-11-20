package com.example.springblog.payload;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.UniqueConstraint;
import javax.validation.constraints.*;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Long id;

    @NotEmpty
    @Size(min = 4, max = 100, message = "User name must be minimum 4 characters and max 100 characters")
    private String name;

    @NotEmpty
    @Size(min = 4, max = 500, message = "About must be minimum 4 characters and max 500 characters")
    private String about;

    @NotNull
    @Email(message = "Valid email required!")
    private String email;

    @NotBlank
    @Size(min = 4, max = 10, message = "Password must be minimum 4 characters and max 10 characters")
    private String password;
}
