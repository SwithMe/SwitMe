package com.watch.switme.controller;

import com.watch.switme.dto.SignUpDTO;
import com.watch.switme.dto.UserListResponseDTO;
import com.watch.switme.service.UserService;
import com.watch.switme.service.TokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class UserController {

    private final UserService userService;

    //회원가입
    //localhost:8080/auth/signUp
    //회원가입시 이메일 @ 형식, ewhain.net 인지 판단하는것 프론트에서 가능한지 물어보기.
    @PostMapping(value = "/signup")
    public ResponseEntity<String> signUp(@RequestBody final SignUpDTO signUpDTO) {
        return userService.isEmailDuplicated(signUpDTO.getEmail())
                ? ResponseEntity.badRequest().build()
                : ResponseEntity.ok(TokenUtils.generateJwtToken(userService.signUp(signUpDTO)));
    }

    //회원정보 리스트 반환
    @GetMapping(value = "/list")
    public ResponseEntity<UserListResponseDTO> findAll() {
        final UserListResponseDTO userListResponseDTO = UserListResponseDTO.builder()
                .userList(userService.findAll()).build();
        return ResponseEntity.ok(userListResponseDTO);
    }



}
