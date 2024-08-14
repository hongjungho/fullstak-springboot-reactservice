package com.example.movieproject.domain.review;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class Controller {

    private Service service;

    @GetMapping("/review/{id}")
    public Reviews getUser(@PathVariable Long id) {
        return service.findById(id);
    }
}