package com.watch.switme.domain;

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

    private Time duration;

    @ManyToOne
    @JoinColumn(name="user_idx")
    private User user;

}
