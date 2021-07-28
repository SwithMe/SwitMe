package com.watch.switme.dto;

import com.watch.switme.domain.Study;
import lombok.Data;
import java.sql.Timestamp;

@Data
public class makeStudyDto {
    private Integer study_idx;
    private String title;
    private String type;
    private Timestamp termstart;
    private Timestamp termend;
    private Timestamp timestart;
    private Timestamp timeend;
    private Integer size;
    private String tags;
    private String location;
    private String extra;
    private String image;
    private Integer leader;
    private String link;
    private String studyIntro;

    public makeStudyDto(Integer study_idx, String title, String type, Timestamp termstart, Timestamp termend, Integer size,
                        String tags, String location, String extra, String image, Integer leader, String link, String studyIntro){
        this.study_idx = study_idx;
        this.title = title;
        this.type = type;
        this.termstart = termstart;
        this.termend = termend;
        this.size = size;
        this.tags = tags;
        this.location = location;
        this.extra = extra;
        this.image = image;
        this.leader = leader;
        this.link = link;
        this.studyIntro = studyIntro;

    }

    public Study toEntity(){
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

    }
}
