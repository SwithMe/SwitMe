package com.watch.switme.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;


@Data
@NoArgsConstructor
@Table(name="Timer_daily_user")
@Entity
public class TimerDailyUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long daily_user_idx;

    private Date date;

    private Long duration;

    //fk
    private Long user_idx;

    @Builder
    public TimerDailyUser(Long daily_user_idx, Date date, Long duration, Long user_idx) {
        this.daily_user_idx = daily_user_idx;
        this.date = date;
        this.duration = duration;
        this.user_idx = user_idx;
    }

    public void update(Long duration) {
        this.duration=duration;
    }
}
