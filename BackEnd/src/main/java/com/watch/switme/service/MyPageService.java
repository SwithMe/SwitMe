package com.watch.switme.service;

import com.watch.switme.domain.UserStudy;
import com.watch.switme.dto.UserStudyListResponseDto;
import com.watch.switme.dto.UserTimerLogResponseDto;
import com.watch.switme.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MyPageService {
    private final UserRepository userRepository;
    private final UserDataExtraRepository userDataExtraRepository;
    private final UserStudyRepository userStudyRepository;
    private final TimerLogRepository timerLogRepository;

    public List<UserStudyListResponseDto> getUserStudyList(Long user_idx){
        List<UserStudy> userStudyList = userStudyRepository.findByUserIdx(user_idx);
        List<UserStudyListResponseDto> userStudyListResponseDtoList = new ArrayList<>();

        for(UserStudy study: userStudyList){
            UserStudyListResponseDto userStudyListResponseDto = UserStudyListResponseDto.builder()
                    .study_idx(study.getStudy().getStudy_idx())
                    .study_title(study.getStudy().getTitle())
                    .study_image(study.getStudy().getImage())
                    .start_date(LocalDateTime.now()) //study.getStudy().getTermstart()
                    .end_date(LocalDateTime.now()) //study.getStudy().getTermend()
                    .warning(study.getWarning())
                    .activate(study.getStudy().getActivate())
                    .build();

            userStudyListResponseDtoList.add(userStudyListResponseDto);
        }

        return userStudyListResponseDtoList;
    }

    public List<UserTimerLogResponseDto> getUserTimerLog(Long user_idx){
        return timerLogRepository.findTop20ByUserIdx(user_idx);
    }
}
