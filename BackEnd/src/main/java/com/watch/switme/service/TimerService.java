package com.watch.switme.service;

import com.watch.switme.domain.Timer;
import com.watch.switme.domain.User;
import com.watch.switme.dto.TimerCreateRequestDto;
import com.watch.switme.dto.TimerDto;
import com.watch.switme.repository.TimerRepository;
import com.watch.switme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TimerService {


    private final TimerRepository timerRepository;
    private final UserRepository userRepository;

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
