package com.example.movieproject.domain.member;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "AGE")
    private Integer age;

}