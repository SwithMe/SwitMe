package com.watch.switme.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Data
@NoArgsConstructor
public class TimerRankDto {
    private String name;
    private Time cumulative_time;

    @Builder
    public TimerRankDto(String name, Time cumulative_time) {
        this.name = name;
        this.cumulative_time = cumulative_time;
    }
}
