package com.example.springblog.entities;

<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
=======
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
>>>>>>> parent of eeceea8 (basic-authentcation-with-database)

@Entity
@Table(name = "users")
@Getter
@Setter
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


    @OneToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Post> postList = new ArrayList<>();
<<<<<<< HEAD

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")

    )
    private Set<Role> roles = new HashSet<>();

=======
>>>>>>> parent of eeceea8 (basic-authentcation-with-database)
}