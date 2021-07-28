package com.watch.switme.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@ToString(exclude = "messageList")
@Getter
@NoArgsConstructor
@Entity
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomIdx;

    //foreign key study
    private Long studyIdx;

    //foreign key user
    private Long leaderIdx;

    //foreign key user
    private Long inquirerIdx;

    @OneToMany(mappedBy = "room")
    private List<ChatMessage> messageList;

    @Builder
    public ChatRoom(Long study_idx, Long leader_idx, Long inquirer_idx){
        this.studyIdx = study_idx;
        this.leaderIdx = leader_idx;
        this.inquirerIdx = inquirer_idx;
    }
}
