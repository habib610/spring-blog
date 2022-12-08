package com.example.springblog;

import com.example.springblog.config.AppConstants;
import com.example.springblog.entities.Role;
import com.example.springblog.repositories.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class BlogApplication implements CommandLineRunner {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;

    public static void main(String[] args) {
        SpringApplication.run(BlogApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(passwordEncoder.encode("some_password"));

        try {
            Role role1 = new Role();
            role1.setId(AppConstants.ROLE_ADMIN);
            role1.setName("ROLE_ADMIN");

            Role role2 = new Role();
            role2.setId(AppConstants.ROLE_USER);
            role2.setName("ROLE_ADMIN");

            Role role3 = new Role();
            role3.setId(AppConstants.ROLE_VIEWER);
            role3.setName("ROLE_VIEWER");


            List<Role> roleList = List.of(role1, role2, role3);
            List<Role> result = roleRepository.saveAll(roleList);

            result.forEach(role -> {
                System.out.println(role.getName());
            });

        } catch (Exception exception) {
            System.out.println("Role already exists");
        }
    }
}
