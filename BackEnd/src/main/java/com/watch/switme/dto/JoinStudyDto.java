package com.watch.switme.dto;

import com.watch.switme.domain.UserYesOrNo;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class JoinStudyDto {

    private Long userStudyIdx;
    private Long studyIdx;
    private Long userIdx;
    private String amLeader;
    private Integer warning;
    private LocalDateTime joinDate;
    private UserYesOrNo activate;

    @Builder
    public JoinStudyDto(Long userStudyIdx, Long studyIdx, Long userIdx, String amLeader,
                        Integer warning, LocalDateTime joinDate, UserYesOrNo activate){
        this.userStudyIdx = userStudyIdx;
        this. studyIdx = studyIdx;
        this. userIdx =userIdx;
        this. amLeader = amLeader;
        this.warning = warning;
        this.joinDate = joinDate;
        this.activate =activate;

    }

}
