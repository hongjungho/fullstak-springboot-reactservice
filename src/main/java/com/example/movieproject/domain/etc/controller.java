package com.example.movieproject.domain.etc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/etc")
public class controller {

    @GetMapping("/test")
    public String test(){
        return "API 호출 테스트";
    }
}
