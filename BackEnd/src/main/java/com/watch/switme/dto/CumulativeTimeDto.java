package com.watch.switme.dto;


import com.watch.switme.domain.TimerDailyUser;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Data
@NoArgsConstructor
public class CumulativeTimeDto {
    private Time cumulative_time;

    @Builder
    public CumulativeTimeDto(Time cumulative_time) {
        this.cumulative_time = cumulative_time;
    }
}
