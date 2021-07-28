package com.watch.switme.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;


@Data
@NoArgsConstructor
@Entity
public class TimerDailyUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long daily_user_idx;

    private Date date;

    private Time duration;

    @ManyToOne
    @JoinColumn(name="user_idx")
    private User user;

    @Builder
    public TimerDailyUser(Long daily_user_idx, Date date, Time duration, User user) {
        this.daily_user_idx = daily_user_idx;
        this.date = date;
        this.duration = duration;
        this.user = user;
    }
}
