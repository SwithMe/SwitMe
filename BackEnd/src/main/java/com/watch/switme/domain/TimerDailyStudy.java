package com.watch.switme.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;


@Data
@NoArgsConstructor
@Table(name="Timer_daily_study")
@Entity
public class TimerDailyStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long daily_study_idx;

    private Date date;

    private Long duration;


    //fk
    @Column(name="study_idx")
    private Long studyIdx;

//    @ManyToOne
//    @JoinColumn(name="study_idx")
//    private Study study;

    @Builder
    public TimerDailyStudy(Long daily_study_idx, Date date, Long duration, Long studyIdx) {
        this.daily_study_idx = daily_study_idx;
        this.date = date;
        this.duration = duration;
        this.studyIdx = studyIdx;
    }

    public void update(Long duration) {
        this.duration=duration;
    }
}
