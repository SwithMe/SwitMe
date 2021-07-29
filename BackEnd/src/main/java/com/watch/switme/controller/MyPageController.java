package com.watch.switme.controller;

import com.watch.switme.service.MyPageService;
import com.watch.switme.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/mypage")
public class MyPageController {
    private final MyPageService myPageService;

    @GetMapping("/user/{user_idx}")
    public void getUserInfo(@PathVariable("user_idx") Long user_idx){
    }

    @GetMapping("/study_list/{user_idx}")
    public void getStudyList(@PathVariable("user_idx") Long user_idx){

    }

    @GetMapping("/timer_log/{user_idx}")
    public void getTimerLog(@PathVariable("user_idx") Long user_idx){

    }
}
