package com.example.movieproject.domain.board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer>
{
    Board findBySubject(String subject);
    Board findBySubjectAndContent(String string, String string2);
    List<Board> findBySubjectLike(String string);
}
