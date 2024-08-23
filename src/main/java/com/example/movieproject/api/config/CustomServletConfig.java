package com.example.movieproject.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.movieproject.controller.formatter.LocalDateFormatter;

/** CORS
 * Ajax를 이용해서 서비스를 호줄하게 되면 반드시 
 * '교차 줄처 리소스 공유(Cross-Origin Resource Sharing)’로 인해 정상적으로 호출이 제한됩니다
 */
@Configuration
public class CustomServletConfig implements WebMvcConfigurer
{
    @Override
    public void addCorsMappings(CorsRegistry registry)
    {
        registry.addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS")
        .maxAge(300)
        .allowedHeaders("Authorization", "Cache-Control", "Content-Type");
    }

    @Override
    public void addFormatters(FormatterRegistry registry)
    {
        registry.addFormatter(new LocalDateFormatter());
        
    }
}