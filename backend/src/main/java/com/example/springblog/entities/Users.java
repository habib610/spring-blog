package com.example.springblog.entities;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Users  implements UserDetails {
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


    @OneToMany( mappedBy = "users" ,fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Post> postList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "usr", referencedColumnName ="id"),
            inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id")

    )
    private Set<Role> roles = new HashSet<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<SimpleGrantedAuthority> authorityList = this.roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());

        return null;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}