package com.watch.switme.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class SaveTimerRequestDto {

    /*
    timer_idx:1, timer_duration : 100, start_time:"", end_time:" "
     */

    private long timer_idx;
    private long timer_duration;
    private Date start_time;
    private Date end_time;
}
