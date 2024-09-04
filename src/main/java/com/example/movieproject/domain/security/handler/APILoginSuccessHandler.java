package com.example.movieproject.domain.security.handler;

import com.example.movieproject.domain.member.MemberDTO;
import com.google.gson.Gson;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Map;
import java.io.PrintWriter;


@Log4j2
public class APILoginSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info("-------------------onAuthenticationSuccess start-------------------------");
        log.info(authentication);
        log.info("---------------------onAuthenticationSuccess end-----------------------");
        MemberDTO memberDTO = (MemberDTO)authentication.getPrincipal();
        Map<String, Object> claims = memberDTO.getClaims();
        claims.put("accessToken","");//나중에 구현
        claims.put("refreshToken","");

        Gson gson = new Gson();
        String jsonStr = gson.toJson(claims);

        response.setContentType("application/json; charset=UTF-8");
        PrintWriter printWriter = response.getWriter();
        printWriter.println(jsonStr);
        printWriter.close();

    }



}
