package com.watch.switme.controller;

import com.watch.switme.domain.*;
import com.watch.switme.dto.*;
import com.watch.switme.service.TimerDailyStudyService;
import com.watch.switme.service.TimerDailyUserService;
import com.watch.switme.service.TimerLogService;
import com.watch.switme.service.TimerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class TimerController {
    private final TimerService timerService;
    private final TimerLogService timerLogService;
    private final TimerDailyUserService timerDailyUserService;
    private final TimerDailyStudyService timerDailyStudyService;


    // 스톱워치 타이머 리스트
    @GetMapping("/timer/list/{user_idx}")
    public List<TimerListResDto> timerList(@PathVariable("user_idx") long user_idx){
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
    @PostMapping("/timer/save")
    public Long timerSave(@RequestBody SaveTimerRequestDto saveTimerRequestDto){

        Long timer_idx=saveTimerRequestDto.getTimer_idx();
        Long timer_duration=saveTimerRequestDto.getTimer_duration();
        Date start_time=saveTimerRequestDto.getStart_time();
        Date end_time=saveTimerRequestDto.getEnd_time();

        //1. Timer 객체 timer_idx로 찾아내기
        //   - user_idx 찾기
        //   - study가 null인지 알아내야 함.
        //      - not null일 경우, study_idx 알아내기

        Timer timer=timerService.findTimer(timer_idx);
        Long user_idx=timer.getUser().getUser_idx();
        Study study=timer.getStudy();

        if(study!=null){
            int study_idx=study.getStudy_idx();
        }

        //2. (Timer) duration 업데이트
        //  - 원래꺼 가져와서 합치기
        Long duration=timer.getDuration();
        Long new_duration=duration+timer_duration; //합쳐진 거
        //이렇게 넣어도 되나..? 업데이트가 되남. 테스트
        TimerSaveDto timerSaveDto=TimerSaveDto.builder()
                .timer_idx(timer_idx)
                .name(timer.getName())
                .duration(new_duration)
                .user(timer.getUser())
                .study(timer.getStudy())
                .build();

        System.out.println("==save timer entity==");
        System.out.println(timerSaveDto);

        Long saved_timer_idx=timerService.save(timerSaveDto);

        //3. (Timer_log)
        TimerLogSaveDto timerLogSaveDto=TimerLogSaveDto.builder()
                .start_time(start_time)
                .end_time(end_time)
                .duration(duration)
                .timer(timer)
                .build();
        System.out.println("==save timerLog entity==");
        System.out.println(timerLogSaveDto);
        Long saved_timerLog_idx=timerLogService.save(timerLogSaveDto);


        //4. (Timer_daily_user)
        //  - user_idx와 date로 찾은 개체에
        //  - duration 업데이트
        TimerDailyUser timerDailyUser=timerDailyUserService.findTimerDailyUser(timer.getUser().getUser_idx());
        timerDailyUser.update(new_duration);


        //5. (Timer_daily_study)
        // - study가 not null일 경우
        // - study_idx와 date로 찾은 개체에
        // -duration 업데이트

        if(study!=null){
            TimerDailyStudy timerDailyStudy=timerDailyStudyService.findTimerDailyStudy(timer.getStudy().getStudy_idx());
            timerDailyStudy.update(new_duration);

        }
    }


}
