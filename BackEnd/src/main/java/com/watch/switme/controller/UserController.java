package com.watch.switme.controller;

import com.sun.mail.iap.Response;
import com.watch.switme.config.WebSecurityConfig;
import com.watch.switme.domain.AuthConstants;
import com.watch.switme.domain.MyUserDetails;
import com.watch.switme.domain.User;
import com.watch.switme.dto.LoginDto;
import com.watch.switme.dto.SignUpDTO;
import com.watch.switme.dto.UserListResponseDTO;
import com.watch.switme.repository.UserRepository;
import com.watch.switme.service.UserService;
import com.watch.switme.service.TokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletWebRequest;


import javax.mail.MessagingException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class UserController {

    private final UserService userService;

    @Autowired
    WebSecurityConfig webSecurityConfig;

    @Autowired
    UserRepository userRepository;

    //회원가입
    @PostMapping(value = "/newsignup")
    public ResponseEntity<String> signUp(@RequestBody final SignUpDTO signUpDTO) {
        return userService.isEmailDuplicated(signUpDTO.getEmail())
                ? ResponseEntity.badRequest().build()
                : ResponseEntity.ok(TokenUtils.generateJwtToken(userService.signUp(signUpDTO)));
    }

    @GetMapping(path = "/signup/{usermail}/{userpassword}/{username}")
    public ResponseEntity<String> authsignup(@PathVariable(name = "usermail") String useremail, @PathVariable(name = "userpassword") String userpassword, @PathVariable(name = "username") String userrealname) {
        SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setEmail(useremail);
        signUpDTO.setPw(userpassword);
        signUpDTO.setRealname(userrealname);

        return userService.isEmailDuplicated(useremail)
                ? ResponseEntity.badRequest().build()
                : ResponseEntity.ok(TokenUtils.generateJwtToken(userService.signUp(signUpDTO)));
    }

    @PostMapping(path = "/loginget")
    public ResponseEntity<String> authloginadd(@RequestBody SignUpDTO signUpDTO) throws Exception {
        if (signUpDTO.getPw().length() > 10) {
            //filter 가 없어서 생기는 문제=>
            User user = userRepository.findByEmailAndPw(signUpDTO.getEmail(), signUpDTO.getPw());
            if (user != null) {
                return null;
            }

            /*SignUpDTO signUpDT01=new SignUpDTO();
            signUpDT01.setEmail(signUpDTO.getEmail());
            signUpDT01.setPw(signUpDTO.getPw());
            signUpDT01.setRealname(signUpDTO.getRealname());*/

            /*HttpHeaders response = new HttpHeaders();
            response.add("Authorization", TokenUtils.generateJwtToken(user));
            response.add("USER_IDX", String.valueOf(user.getUser_idx()));
            ResponseEntity<String> responseEntity = new ResponseEntity(response, HttpStatus.OK);
            return responseEntity;*/

            HttpHeaders headers = new HttpHeaders();
            int score = Integer.parseInt(user.getUser_idx().toString());
            headers.add(AuthConstants.AUTH_HEADER, AuthConstants.TOKEN_TYPE);
            headers.add(AuthConstants.USER_HEADER, user.getUser_idx().toString());
            final String token = TokenUtils.generateJwtToken(user);
            return new ResponseEntity<String>(TokenUtils.generateJwtToken(user), headers, HttpStatus.CREATED);
        }
        webSecurityConfig.customAuthenticationFilter();
        return ResponseEntity.ok("dsjfldkf");
    }





    //회원정보 리스트 반환
    @GetMapping(value = "/list")
    public ResponseEntity<UserListResponseDTO> findAll() {
        final UserListResponseDTO userListResponseDTO = UserListResponseDTO.builder()
                .userList(userService.findAll()).build();
        return ResponseEntity.ok(userListResponseDTO);
    }
}
