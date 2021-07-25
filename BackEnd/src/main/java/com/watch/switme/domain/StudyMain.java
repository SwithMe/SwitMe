package com.watch.switme.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class StudyMain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long study_idx;

}
