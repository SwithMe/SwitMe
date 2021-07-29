package com.watch.switme.service;

import com.watch.switme.domain.TimerDailyUser;
import com.watch.switme.dto.CumulativeTimeDto;
import com.watch.switme.dto.TimerDailyUserSaveDto;
import com.watch.switme.dto.TimerLogSaveDto;
import com.watch.switme.dto.TimerRankDto;
import com.watch.switme.repository.TimerDailyUserRepository;
import com.watch.switme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TimerDailyUserService {

    private final TimerDailyUserRepository timerDailyUserRepository;
    private final UserRepository userRepository;

    @Transactional
    public Long save(TimerDailyUserSaveDto timerDailyUserSaveDto){
        return timerDailyUserRepository.save(timerDailyUserSaveDto.toEntity()).getDaily_user_idx();
    }

    /*
        @Transactional
    public Long update(Long timer_idx, String timer_name){
        Timer timer=timerRepository.findById(timer_idx).get();
        timer.update(timer_name);

        return timer_idx;
    }
     */
    @Transactional
    public Long update(Long timerDailyUserIdx, Long duration){
        TimerDailyUser timerDailyUser=timerDailyUserRepository.findById(timerDailyUserIdx).get();
        timerDailyUser.update(duration);

        return timerDailyUserIdx;
    }

    @Transactional
    public CumulativeTimeDto getTime(Long user_idx){


        LocalDate before = LocalDate.now().minusDays(1);
        LocalDate now = LocalDate.now();
//        Date before = new Date(System.currentTimeMillis() - 30000L);
//        Date now = new Date();


        TimerDailyUser timerDailyUser = timerDailyUserRepository.findByUserIdxAndDateBetween(user_idx, before, now);

        CumulativeTimeDto cumulativeTimeDto= CumulativeTimeDto.builder()
                .cumulative_time(timerDailyUser.getDuration())
                .build();

        return cumulativeTimeDto;
    }

    @Transactional
    public TimerDailyUser findTimerDailyUser(Long user_idx){
        LocalDate before = LocalDate.now().minusDays(1);
        LocalDate now = LocalDate.now();

        /*
        Date before = new Date(System.currentTimeMillis() - 30000L);
        Date now = new Date();*/

        System.out.println("🐭before");
        System.out.println(before);
        System.out.println("🐭now");
        System.out.println(now);

        TimerDailyUser timerDailyUser=timerDailyUserRepository.findByUserIdxAndDateBetween(user_idx, before,now);

        return timerDailyUser;
    }



    @Transactional
    public List<TimerRankDto> getRank(){
        List<TimerDailyUser> timerDailyUserList = timerDailyUserRepository.findTop5ByOrderByDurationDesc();

        List <TimerRankDto> timerRankDtoList=new ArrayList<>();

        for(TimerDailyUser timerDailyUser:timerDailyUserList){
            TimerRankDto timerRankDto =TimerRankDto.builder()
                    .name(userRepository.findById(timerDailyUser.getUserIdx()).get().getRealname())
                    .cumulative_time(timerDailyUser.getDuration())
                    .build();

            timerRankDtoList.add(timerRankDto);
        }

        return timerRankDtoList;

    }
}
