package com.watch.switme.dto;

import com.watch.switme.domain.UserYesOrNo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@NoArgsConstructor
@Data
public class MakeStudyDto {
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
    private MultipartFile image;
    private Long leader;
    private String link;
    private String studyIntro;
    private UserYesOrNo activate;

    @Builder
    public MakeStudyDto(String title, String type, Date termstart, Date termend, Time timestart, Time timeend, Integer size,
                        String tags, String location, String extra, MultipartFile image, Long leader, String link, String studyIntro){
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

}
