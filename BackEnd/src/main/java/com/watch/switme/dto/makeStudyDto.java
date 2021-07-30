package com.watch.switme.dto;

<<<<<<< Updated upstream
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
=======
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

@NoArgsConstructor
@Data
>>>>>>> Stashed changes
public class makeStudyDto {
    private Long study_idx;
    private String title;
    private String type;
    private Date termstart;
    private Date termend;
    private Time timestart;
    private Time timeend;
    private Integer size;
    private String tags;
    private String location;
    private String extra;
    private String image;
    private Long leader;
    private String link;
    private String studyIntro;

    @Builder
    public makeStudyDto(Long study_idx, String title, String type, Date termstart, Date termend, Time timestart, Time timeend, Integer size,
                        String tags, String location, String extra, String image, Long leader, String link, String studyIntro){
        this.study_idx = study_idx;
        this.title = title;
        this.type = type;
        this.termstart = termstart;
        this.termend = termend;
        this.timestart = timestart;
        this.timeend = timeend;
        this.size = size;
        this.tags = tags;
        this.location = location;
        this.extra = extra;
        this.image = image;
        this.leader = leader;
        this.link = link;
        this.studyIntro = studyIntro;

    }

    /**public Study toEntity(){
        return Study.builder()
                .study_idx(study_idx)
                .title(title)
                .type(type)
                .termstart(termstart)
                .termend(termend)
                .size(size)
                .tags(tags)
                .location(location)
                .extra(extra)
                .image(image)
                .leader(leader)
                .link(link)
                .studyIntro(studyIntro);

    }**/
}
