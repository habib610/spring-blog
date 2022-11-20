package com.example.springblog.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users {
    @Id
    @SequenceGenerator(
            name = "blog_user_sequence",
            allocationSize = 1,
            sequenceName = "blog_user_sequence"
    )
    @GeneratedValue(
            generator = "blog_user_sequence",
            strategy = GenerationType.SEQUENCE
    )
    private Long id;
    @Column(
            nullable = false,
            length = 100
    )
    private String name;
    @Column(
            nullable = false,
            unique = true
    )
    private String email;
    @Column(
            nullable = false,
            length = 500
    )
    private String about;
    @Column(
            nullable = false
    )
    private String password;
}