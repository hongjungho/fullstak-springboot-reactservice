package com.example.movieproject.domain.review;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class Service {

    private final ReviewsRepository reviewsRepository;

    public Reviews findById(Long id) {
        return reviewsRepository.findById(id).get();
    }
}