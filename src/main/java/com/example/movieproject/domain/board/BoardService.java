package com.example.movieproject.domain.board;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardService
{
    private final BoardRepository boardRepository;

//    private Specification<Board> search(String kw)
//    {
//        return new Specification<>()
//        {
//            private static final long serialVersionUID = 1L;
//
//            @Override
//            public Predicate toPredicate(Root<Board> q, CriteriaQuery<?> query, CriteriaBuilder cb)
//            {
//                query.distinct(true);//중복을 제거
//                return cb.or(
//                            cb.like( q.get("subject") ,"%" + kw + "%" ), //제목
//                            cb.like( q.get("content") ,"%" + kw + "%" )  //내용
//                );
//            }
//        };
//    }
    
    public Board create(AddBoardRequest request)
    {
        return this.boardRepository.save(request.toEntity());
    }
    
    public List<Board> getList()
    {
        return this.boardRepository.findAll();
    }
    
    public Board getBoard(Integer id)
    {
        return boardRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("not found: " + id));
    }
    
    public void delete(Integer id)
    {
        this.boardRepository.deleteById(id);
    }
    
    @Transactional
    public Board modify(Integer id, UpdateBoardRequest request)
    {
        Board board = boardRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("not found: " + id));
        board.update(request.getSubject(), request.getContent());
        return board;
    }

}
