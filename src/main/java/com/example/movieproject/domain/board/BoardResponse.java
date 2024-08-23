package com.example.movieproject.domain.board;

import java.time.LocalDateTime;

import lombok.Getter;

@Getter
public class BoardResponse {
    private final Integer id;
    private final String  subject;
    private final String  content;
    private final LocalDateTime  createDate;
    private final LocalDateTime  modifyDate;
    public BoardResponse(Board board) {
        this.id         = board.getId();
        this.subject    = board.getSubject();
        this.content    = board.getContent();
        this.createDate = board.getCreateDate();
        this.modifyDate = board.getModifyDate();
    }
}