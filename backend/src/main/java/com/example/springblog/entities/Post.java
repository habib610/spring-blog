package com.example.springblog.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @SequenceGenerator(name = "post_id_sequence", sequenceName = "post_id_sequence", allocationSize = 1)
    @GeneratedValue(generator = "post_id_sequence", strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "post_title", nullable = false, length = 150)
    private String title;

    @Column(name = "content", nullable = false, length = 10000)
    private String content;

    private String imageName;
    private Date addedDate;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

}
