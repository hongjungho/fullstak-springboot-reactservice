package com.example.movieproject.domain.member;


import com.example.movieproject.domain.util.CustomJWTException;
import com.example.movieproject.domain.util.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
public class MemberController {

    @RequestMapping("/api/member/refresh")
    public Map<String, Object> refresh(@RequestHeader("Authorization")String authHeader, @RequestParam("refreshToken")String refreshToken){
        if(refreshToken == null) {
            throw new CustomJWTException("NULL_REFRASH");
        }
        if(authHeader == null || authHeader.length() < 7) {
            throw new CustomJWTException("INVALID_STRING");
        }
        String accessToken = authHeader.substring(7);

        //Access 토큰이 만료되지 않았다면
        if(checkExpiredToken(accessToken) == false ) {
            return Map.of("accessToken" ,accessToken, "refreshToken", refreshToken);
        }
        //Refresh토큰 검증
        Map<String, Object> claims = JWTUtil.validateToken(refreshToken);
        log.info("refresh ... claims: " + claims);
        String newAccessToken = JWTUtil.generateToken(claims,10);
        String newRefreshToken = checkTime((Integer)claims.get("exp")) == true?
                JWTUtil.generateToken(claims, 60*24) : refreshToken;
        return Map.of("accessToken", newAccessToken, "refreshToken",newRefreshToken);
    }

    private boolean checkTime(Integer exp) {
        //그WT exp를 날짜로 변환
        java.util.Date expDate = new java.util.Date( (long)exp * (1000 ));
        //현 재 시간과의 차이 계산 - 밀리세컨즈
        long gap = expDate.getTime() - System.currentTimeMillis();
        //분단위 계산
        long leftMin = gap / (1000 * 60);
        //I시간도 안남았는지..
        return leftMin < 60;

    }


    private boolean checkExpiredToken(String token) {
        try {
            JWTUtil.validateToken(token);
        }catch(CustomJWTException ex){
            if(ex.getMessage().equals("Expired")){
                return true;
            }
        }
        return false;
    }
}
