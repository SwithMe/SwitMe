package com.watch.switme.controller;

import com.watch.switme.dto.CumulativeTimeDto;
import com.watch.switme.dto.TimerListResDto;
import com.watch.switme.service.TimerDailyUserService;
import com.watch.switme.service.TimerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class TimerDailyUserController {

    private final TimerDailyUserService timerDailyUserService;


    //나의 누적 공부시간
    @GetMapping("/main/mytime/{user_idx}")
    public CumulativeTimeDto timerList(@PathVariable("user_idx") long user_idx){
        return timerDailyUserService.getTime(user_idx);
    }
}
