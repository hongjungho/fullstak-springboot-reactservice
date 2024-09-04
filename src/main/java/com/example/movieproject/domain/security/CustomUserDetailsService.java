package com.example.movieproject.domain.security;

import com.example.movieproject.domain.member.Member;
import com.example.movieproject.domain.member.MemberDTO;
import com.example.movieproject.domain.member.MemberRepository;
import com.example.movieproject.domain.member.MemberRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("--------------loadUserByUsername Start----------------");

        log.info("----------------------test data insert-------------------------");
        if(memberRepository.findAll().size() < 1) {
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

        log.info("--------------loadUserByUsername End----------------");
        return memberDto;
    }
}
