package com.example.springblog.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "comment")
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "content", nullable = false, length = 10000)
    private String content;
    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private Long userId;
    @ManyToOne
    private Post post;

}
