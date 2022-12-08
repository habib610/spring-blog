package com.example.springblog;

<<<<<<< HEAD
import com.example.springblog.repositories.RoleRepository;
=======
>>>>>>> parent of 237b7aa (register-new-user-with-Role)
import org.modelmapper.ModelMapper;
<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
<<<<<<< HEAD

@SpringBootApplication
public class BlogApplication {

    @Autowired
    private RoleRepository roleRepository;

=======
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BlogApplication implements CommandLineRunner {
    @Autowired
    private PasswordEncoder passwordEncoder;
>>>>>>> parent of 237b7aa (register-new-user-with-Role)
=======
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BlogApplication {

>>>>>>> parent of eeceea8 (basic-authentcation-with-database)
    public static void main(String[] args) {
        SpringApplication.run(BlogApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

    @Override
    public void run(String... args) throws Exception {
        System.out.println(passwordEncoder.encode("some_password"));
    }
>>>>>>> parent of 237b7aa (register-new-user-with-Role)
=======
>>>>>>> parent of eeceea8 (basic-authentcation-with-database)
}
