package com.example.springblog.repositories;

import com.example.springblog.entities.Category;
import com.example.springblog.entities.Post;
import com.example.springblog.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> getAllByUsers(Users users);
    List<Post> getAllByCategory(Category category);
    List<Post> getByTitleContaining(String keyword);

    @Query(value = "SELECT * FROM comment c group by c.post ", nativeQuery = true)
    List<Post> getPostByCommentsGreaterThan();
}
