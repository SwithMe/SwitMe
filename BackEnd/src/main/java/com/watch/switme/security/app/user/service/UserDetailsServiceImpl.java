package com.jwtappliedexample.example.security.app.user.service;

import com.jwtappliedexample.example.security.app.user.domain.MyUserDetails;
import com.jwtappliedexample.example.security.app.user.repository.UserRepository;
import com.jwtappliedexample.example.security.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public MyUserDetails loadUserByUsername(String email) {
        return userRepository.findByEmail(email)
                .map(u -> new MyUserDetails(u, Collections.singleton(new SimpleGrantedAuthority(u.getRole().getValue()))))
                .orElseThrow(() -> new UserNotFoundException(email+"=>존재하지 않음."));
    }

}
