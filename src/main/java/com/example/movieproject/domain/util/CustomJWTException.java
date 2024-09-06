package com.example.movieproject.domain.util;

public class CustomJWTException extends RuntimeException{
    public CustomJWTException(String msg){
        super(msg);
    }
}
