package com.watch.switme.controller;

import com.watch.switme.domain.Timer;
import com.watch.switme.dto.TimerDto;
import com.watch.switme.service.TimerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class TimerController {
    private final TimerService timerService;


    @GetMapping("/timer/list/{user_idx}")
    public List<TimerDto> timerList(@PathVariable("user_idx") long user_idx){
        return timerService.getTimerList(user_idx);
    }


}
