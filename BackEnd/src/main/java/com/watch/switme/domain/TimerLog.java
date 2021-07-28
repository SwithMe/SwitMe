package com.watch.switme.domain;

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

    private Time duration;

    @ManyToOne
    @JoinColumn(name="timer_idx")
    private Timer timer;

}
