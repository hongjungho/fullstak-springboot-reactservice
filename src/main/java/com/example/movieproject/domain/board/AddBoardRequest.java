package com.example.movieproject.domain.board;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddBoardRequest {
    private String subject;
    private String content;
    public Board toEntity() {
        return Board.builder()
                .subject(subject)
                .content(content)
                .build();
    }
}