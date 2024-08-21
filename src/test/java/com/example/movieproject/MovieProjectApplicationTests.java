package com.example.movieproject;

import com.example.movieproject.domain.member.Member;
import com.example.movieproject.domain.member.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class MovieProjectApplicationTests {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    void contextLoads() {


        System.out.println("junit Test1");
        //given
        Member member = new Member();
        member.setName("andrew");
        member.setAge(32);
        memberRepository.save(member);


        System.out.println("junit Test2");
        // when
        Member retrivedMember = memberRepository.findById(member.getId()).get();


        System.out.println("junit Test3");
        // then
        assertEquals(retrivedMember.getName(), "andrew");
        assertEquals(retrivedMember.getAge(), Integer.valueOf(32));
    }

}
