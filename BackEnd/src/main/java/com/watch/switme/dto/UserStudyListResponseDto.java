package com.watch.switme.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class UserStudyListResponseDto {
    private Integer study_idx;
    private String study_title;
    private String study_image;
    private LocalDateTime start_date;
    private LocalDateTime end_date;
    private int warning;

    @Builder
    public UserStudyListResponseDto(Integer study_idx, String study_title, String study_image, LocalDateTime start_date, LocalDateTime end_date, int warning){
        this.study_idx = study_idx;
        this.study_title = study_title;
        this.study_image = study_image;
        this.start_date = start_date;
        this.end_date = end_date;
        this.warning = warning;
    }
}
