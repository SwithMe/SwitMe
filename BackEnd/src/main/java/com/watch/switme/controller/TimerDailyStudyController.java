package com.watch.switme.controller;

import com.watch.switme.dto.TimerRankDto;
import com.watch.switme.service.TimerDailyStudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class TimerDailyStudyController {
    private final TimerDailyStudyService timerDailyStudyService;

    //누적 공부 시간 랭킹 (스터디)
    @GetMapping("/main/rank/study")
    public List<TimerRankDto> getRank(){
        return timerDailyStudyService.getRank();
    }
}
