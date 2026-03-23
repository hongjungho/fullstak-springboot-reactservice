package com.example.movieproject.domain.main;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.h2.util.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
public class SpotifyController {

    @Value("${spotify.client-id}")
    private String clientId;

    @Value("${spotify.client-secret}")
    private String clientSecret;

    @GetMapping("/get-token")
    public ResponseEntity<String> getSpotifyToken() {
        try {
            String tokenUrl = "https://accounts.spotify.com/api/token";
            RestTemplate restTemplate = new RestTemplate();

            // Spotify Client Credentials를 base64로 인코딩
            String credentials = clientId + ":" + clientSecret;
            String base64Credentials = Base64.getEncoder().encodeToString(credentials.getBytes(StandardCharsets.UTF_8));

            // 헤더 설정
            HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "Basic " + base64Credentials);
            headers.add("Content-Type", "application/x-www-form-urlencoded");

            // 바디 설정
            String body = "grant_type=client_credentials";

            // 요청 생성
            HttpEntity<String> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, String.class);

            // Spotify로부터 받은 토큰 반환
            if (response.getStatusCode() == HttpStatus.OK) {
                JSONObject json = new JSONObject(response.getBody());
                return ResponseEntity.ok(json.toString());
            } else {
                return ResponseEntity.status(response.getStatusCode()).body("Failed to fetch token");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching token: " + e.getMessage());
        }
    }
}
