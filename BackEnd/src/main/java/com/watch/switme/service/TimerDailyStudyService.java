package com.watch.switme.service;

import com.watch.switme.domain.TimerDailyStudy;
import com.watch.switme.dto.TimerRankDto;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.TimerDailyStudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TimerDailyStudyService {
    private final TimerDailyStudyRepository timerDailyStudyRepository;
    private final StudyRepository studyRepository;

    @Transactional
    public List<TimerRankDto> getRank(){
        List<TimerDailyStudy> timerDailyStudyList = timerDailyStudyRepository.findTop5ByOrderByDurationDesc();
        List <TimerRankDto> timerRankDtoList=new ArrayList<>();

        for(TimerDailyStudy timerDailyStudy:timerDailyStudyList){
            TimerRankDto timerRankDto = TimerRankDto.builder()
                    .name(studyRepository.findById(timerDailyStudy.getStudy_idx()).get().getTitle())
                    .cumulative_time(timerDailyStudy.getDuration())
                    .build();

            timerRankDtoList.add(timerRankDto);
        }

        return timerRankDtoList;
    }

}
