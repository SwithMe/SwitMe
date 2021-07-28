package com.jwtappliedexample.example.security.app.user.service;

import com.jwtappliedexample.example.security.app.user.domain.User;
import com.jwtappliedexample.example.security.app.user.dto.SignUpDTO;
import com.jwtappliedexample.example.security.app.user.repository.UserRepository;
import com.jwtappliedexample.example.security.constants.UserRole;
import com.jwtappliedexample.example.security.constants.UserYesOrNo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public User signUp(final SignUpDTO signUpDTO) {
        final User user = User.builder()
                .email(signUpDTO.getEmail())
                .pw(passwordEncoder.encode(signUpDTO.getPw()))
                .role(UserRole.ROLE_USER)
                .manner_temperature(70)
                .UserAgree(UserYesOrNo.Y)
                .realname(signUpDTO.getRealname())
                .build();

        return userRepository.save(user);
    }

    public boolean isEmailDuplicated(final String email) {
        return userRepository.existsByEmail(email);
    }
    public List<User> findAll() {
        return userRepository.findAll();
    }
    public Optional<User> findByEmail(final String email) {return userRepository.findByEmail(email);}
}
