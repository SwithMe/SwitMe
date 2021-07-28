package com.watch.switme.controller;

import com.watch.switme.domain.Timer;
import com.watch.switme.domain.User;
import com.watch.switme.dto.TimerCreateRequestDto;
import com.watch.switme.dto.TimerDto;
import com.watch.switme.service.TimerService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class TimerController {
    private final TimerService timerService;


    // 스톱워치 타이머 리스트
    @GetMapping("/timer/list/{user_idx}")
    public List<TimerDto> timerList(@PathVariable("user_idx") long user_idx){
        return timerService.getTimerList(user_idx);
    }


    //스톱워치 수정
    @PutMapping("/timer/edit/{timer_idx}")
    public Long timerUpdate(@PathVariable("timer_idx") long timer_idx, @RequestBody Map<String, String> param){
        String timer_name = param.get("timer_name");

        return timerService.update(timer_idx, timer_name);
    }

    //스톱워치 추가
    @PostMapping("/timer/add/{user_idx}")
    public Long timerCreate(@PathVariable("user_idx") long user_idx,@RequestBody Map<String, String> param) {

        String timer_name=param.get("timer_name");

        return timerService.create(user_idx, timer_name);
    }

    //스톱워치 삭제
    @DeleteMapping("/timer/delete/{timer_idx}")
    public void timerDelete(@PathVariable("timer_idx") long timer_idx){
        timerService.delete(timer_idx);
    }


    //스톱워치 정지 후 저장

}
