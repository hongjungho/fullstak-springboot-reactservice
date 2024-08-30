package com.example.movieproject.domain.security;

import com.example.movieproject.domain.member.Member;
import com.example.movieproject.domain.member.MemberDTO;
import com.example.movieproject.domain.member.MemberRepository;
import io.micrometer.observation.annotation.Observed;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("--------------loadUserByUsername Start----------------");

        Member member = memberRepository.getWithRoles(username);
        if(member == null){
            throw new UsernameNotFoundException("user name Not Found");
        }

        MemberDTO memberDto = new MemberDTO(
                member.getEmail(),
                member.getPw(),
                member.getNickname(),
                member.isSocial(),
                member.getMemberRoleList()
                        .stream()
                        .map(memberRole -> memberRole.name()).collect(Collectors.toList()));

        log.info("--------------MemberDTO : "+memberDto);
        log.info("--------------loadUserByUsername End----------------");
        return memberDto;
    }
}
