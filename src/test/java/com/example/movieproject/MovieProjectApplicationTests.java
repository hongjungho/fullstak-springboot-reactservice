package com.example.movieproject;

import com.example.movieproject.domain.member.Member;
import com.example.movieproject.domain.member.MemberRepository;
import com.example.movieproject.domain.member.MemberRole;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
class MovieProjectApplicationTests {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void testInsertUser() {
        for (int i = 0; i < 10 ; i++) {
            Member member = Member.builder()
                    .email ("user"+i+"@test.com")
                            .pw(passwordEncoder.encode("1111"))
                            .nickname ("USER"+i)
                            .build();
            member.addRole(MemberRole.USER);
            if(i >= 5) {
                member.addRole(MemberRole.MANAGER);
                if (i >= 8) {
                    member.addRole(MemberRole.ADMIN);
                }
            }
            memberRepository.save(member);

        }
    }

}
