package com.watch.switme.service;

import com.watch.switme.domain.Timer;
import com.watch.switme.domain.User;
import com.watch.switme.dto.ChatRoomDto;
import com.watch.switme.dto.TimerCreateRequestDto;
import com.watch.switme.dto.TimerListResDto;
import com.watch.switme.dto.TimerSaveDto;
import com.watch.switme.repository.TimerRepository;
import com.watch.switme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TimerService {


    private final TimerRepository timerRepository;
    private final UserRepository userRepository;


    @Transactional
    public Long save(TimerSaveDto timerSaveDto){
        return timerRepository.save(timerSaveDto.toEntity()).getTimer_idx();
    }


    @Transactional
    public Timer findTimer(Long timer_idx){return timerRepository.findById(timer_idx).get();}

    @Transactional
    public List<TimerListResDto> getTimerList(Long user_idx){

        User user=userRepository.findById(user_idx).get();

        List <Timer> timerList=timerRepository.findByUser(user);
        List <TimerListResDto> timerListResDtoList =new ArrayList<>();

        for(Timer timer:timerList){
            TimerListResDto timerListResDto = TimerListResDto.builder()
                    .timer_idx(timer.getTimer_idx())
                    .name(timer.getName())
                    .duration(timer.getDuration())
                    .build();
            timerListResDtoList.add(timerListResDto);
        }

        return timerListResDtoList;
    }

    @Transactional
    public Long update(Long timer_idx, String timer_name){
        Timer timer=timerRepository.findById(timer_idx).get();
        timer.update(timer_name);

        return timer_idx;
    }

    @Transactional
    public Long create(Long user_idx, String timer_name) {

        User user=userRepository.findById(user_idx).get();

        TimerCreateRequestDto timerCreateRequestDto=TimerCreateRequestDto.builder()
                .name(timer_name)
                .user(user)
                .build();

        return timerRepository.save(timerCreateRequestDto.toEntity()).getTimer_idx();
    }

    @Transactional
    public void delete(Long timer_idx){
        timerRepository.deleteById(timer_idx);
    }



}
