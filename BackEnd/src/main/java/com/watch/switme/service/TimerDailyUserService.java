package com.watch.switme.service;

import com.watch.switme.domain.TimerDailyUser;
import com.watch.switme.dto.CumulativeTimeDto;
import com.watch.switme.dto.TimerRankDto;
import com.watch.switme.repository.TimerDailyUserRepository;
import com.watch.switme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TimerDailyUserService {

    private final TimerDailyUserRepository timerDailyUserRepository;
    private final UserRepository userRepository;

    @Transactional
    public CumulativeTimeDto getTime(Long user_idx){

        Date before = new Date(System.currentTimeMillis() - 30000L);
        Date now = new Date();

        TimerDailyUser timerDailyUser = timerDailyUserRepository.findByUserIdxAndDateBetween(user_idx, before, now);

        CumulativeTimeDto cumulativeTimeDto= CumulativeTimeDto.builder()
                .cumulative_time(timerDailyUser.getDuration())
                .build();

        return cumulativeTimeDto;
    }



    @Transactional
    public List<TimerRankDto> getRank(){
        List<TimerDailyUser> timerDailyUserList = timerDailyUserRepository.findTop5ByOrderByDurationDesc();

        List <TimerRankDto> timerRankDtoList=new ArrayList<>();

        for(TimerDailyUser timerDailyUser:timerDailyUserList){
            TimerRankDto timerRankDto =TimerRankDto.builder()
                    .name(userRepository.findById(timerDailyUser.getUser_idx()).get().getRealname())
                    .cumulative_time(timerDailyUser.getDuration())
                    .build();

            timerRankDtoList.add(timerRankDto);
        }

        return timerRankDtoList;

    }
}
