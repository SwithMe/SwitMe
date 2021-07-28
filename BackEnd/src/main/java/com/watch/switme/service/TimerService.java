package com.watch.switme.service;

import com.watch.switme.domain.Timer;
import com.watch.switme.dto.TimerDto;
import com.watch.switme.repository.TimerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TimerService {

    private final TimerRepository timerRepository;

    @Transactional
    public List<TimerDto> getTimerList(Long user_idx){
        List <Timer> timerList=timerRepository.findByUserIdx(user_idx);
        List <TimerDto> timerDtoList=new ArrayList<>();

        for(Timer timer:timerList){
            TimerDto timerDto=TimerDto.builder()
                    .timer_idx(timer.getTimer_idx())
                    .name(timer.getName())
                    .user(timer.getUser())
                    .study(timer.getStudy())
                    .build();
            timerDtoList.add(timerDto);
        }

        return timerDtoList;
    }

}
