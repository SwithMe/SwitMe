package com.watch.switme.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    //회원가입 시 받는 3가지 main정보.
    private String email; // 이메일
    private String pw; // 비밀번호
    private String realname; // 이름
}
