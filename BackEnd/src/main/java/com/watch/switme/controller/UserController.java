package com.watch.switme.controller;

import com.watch.switme.config.WebSecurityConfig;
import com.watch.switme.dto.LoginDto;
import com.watch.switme.dto.SignUpDTO;
import com.watch.switme.dto.UserListResponseDTO;
import com.watch.switme.service.UserService;
import com.watch.switme.service.TokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.mail.MessagingException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class UserController {

    private final UserService userService;

    //회원가입
    @PostMapping(value = "/newsignup")
    public ResponseEntity<String> signUp(@RequestBody final SignUpDTO signUpDTO) {
        return userService.isEmailDuplicated(signUpDTO.getEmail())
                ? ResponseEntity.badRequest().build()
                : ResponseEntity.ok(TokenUtils.generateJwtToken(userService.signUp(signUpDTO)));
    }

    @GetMapping(path = "/signup/{usermail}/{userpassword}/{username}")
    public ResponseEntity<String> authsignup(@PathVariable(name="usermail")String useremail, @PathVariable(name="userpassword")String userpassword,@PathVariable(name="username")String userrealname){
        SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setEmail(useremail);
        signUpDTO.setPw(userpassword);
        signUpDTO.setRealname(userrealname);

        return userService.isEmailDuplicated(useremail)
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
