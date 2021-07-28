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
public class TimerDailyStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long daily_study_idx;

    private Date date;

    private Time duration;

    //fk
    private Long study_idx;

//    @ManyToOne
//    @JoinColumn(name="study_idx")
//    private Study study;

    @Builder
    public TimerDailyStudy(Long daily_study_idx, Date date, Time duration, Long study_idx) {
        this.daily_study_idx = daily_study_idx;
        this.date = date;
        this.duration = duration;
        this.study_idx = study_idx;
    }
}
