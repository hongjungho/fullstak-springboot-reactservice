package com.example.movieproject.domain.util;

@SuppressWarnings("serial")
public class CustomJWTException extends RuntimeException{
    public CustomJWTException(String msg){
        super(msg);
    }
}
