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

    @Query(value = "with comment as ( select post, count(*) as total_comments from comment group by post ) select * , coalesce(total_comments, 0)  as comments  from posts p left join comment c on p.id = c.post  limit 3 ", nativeQuery = true)
    List<Post> getPostByCommentsGreaterThan();
}
