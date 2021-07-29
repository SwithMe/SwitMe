package com.watch.switme.dto;


import com.watch.switme.domain.Timer;
import com.watch.switme.domain.TimerLog;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
public class TimerLogSaveDto {

    private Date start_time;
    private Date end_time;
    private Long duration;
    private Timer timer;

    @Builder
    public TimerLogSaveDto(Date start_time, Date end_time, Long duration, Timer timer) {
        this.start_time = start_time;
        this.end_time = end_time;
        this.duration = duration;
        this.timer = timer;
    }

    public TimerLog toEntity(){
        return TimerLog.builder()
                .start_time(start_time)
                .end_time(end_time)
                .duration(duration)
                .timer(timer)
                .build();
    }
}
