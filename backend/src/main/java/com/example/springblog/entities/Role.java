package com.example.springblog.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Role {
    @Id
    private Long id;
    private String name;
}
