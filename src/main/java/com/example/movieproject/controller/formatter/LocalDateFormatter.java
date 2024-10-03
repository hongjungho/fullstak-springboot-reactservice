package com.example.movieproject.controller.formatter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import org.springframework.format.Formatter;

public class LocalDateFormatter implements Formatter<LocalDate>
{
    @Override
    @SuppressWarnings("null")
    public LocalDate parse(String text, Locale locale)
    {
        return LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

    @Override
    @SuppressWarnings("null")
    public String print(LocalDate object, Locale locale)
    {
        return DateTimeFormatter.ofPattern("yyyy-MM-dd").format(object);
    }

}
