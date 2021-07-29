package com.watch.switme.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@Table(name="Timer_log")
@Entity
public class TimerLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long log_idx;

    private Date start_time;

    private Date end_time;

    private Long duration;

    @ManyToOne
    @JoinColumn(name="timer_idx")
    private Timer timer;

    @Builder
    public TimerLog(Long log_idx, Date start_time, Date end_time, Long duration, Timer timer) {
        this.log_idx = log_idx;
        this.start_time = start_time;
        this.end_time = end_time;
        this.duration = duration;
        this.timer = timer;
    }
}
