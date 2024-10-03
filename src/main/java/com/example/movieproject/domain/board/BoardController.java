package com.example.movieproject.domain.board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;


@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class BoardController
{
    private final BoardService boardService;

    @PostMapping(value="/board")
    public ResponseEntity<Board> boardCreate(@RequestBody AddBoardRequest request)
    {
        Board savedBoard = boardService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBoard);
    }
    
    @GetMapping("/board")
//    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<List<BoardResponse>> list()
    {
        List<BoardResponse> boards = boardService.getList()
                                                 .stream()
                                                 .map(BoardResponse::new)
                                                 .toList();
        return ResponseEntity.ok().body(boards);
    }

    
    @GetMapping(value="/board/{id}")
    public ResponseEntity<BoardResponse> detail(@PathVariable("id") Integer id)
    {
        return ResponseEntity.ok().body(new BoardResponse(boardService.getBoard(id)));
    }

    @DeleteMapping(value="/board/{id}")
    public ResponseEntity<Void> boardDelete(@PathVariable("id") Integer id)
    {
        boardService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping(value="/board/{id}")
    public ResponseEntity<Board> boardModify(@PathVariable("id") Integer id, @RequestBody UpdateBoardRequest request)
    {
        Board updatedBoard = boardService.modify(id, request);
        return ResponseEntity.ok().body(updatedBoard);
    }
}
