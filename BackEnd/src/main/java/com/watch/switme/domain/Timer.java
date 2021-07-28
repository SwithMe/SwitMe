package com.watch.switme.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Timer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timer_idx;

    @Column(name = "timer_name")
    private String name;

    @ManyToOne
    @JoinColumn(name="user_idx")
    private User user;

    @ManyToOne
    @JoinColumn(name="study_idx")
    private StudyMain study;

}
