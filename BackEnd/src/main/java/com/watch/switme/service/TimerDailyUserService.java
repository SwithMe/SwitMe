package com.watch.switme.service;

import com.watch.switme.domain.TimerDailyUser;
import com.watch.switme.dto.CumulativeTimeDto;
import com.watch.switme.repository.TimerDailyUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@RequiredArgsConstructor
@Service
public class TimerDailyUserService {

    private final TimerDailyUserRepository timerDailyUserRepository;

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
}
