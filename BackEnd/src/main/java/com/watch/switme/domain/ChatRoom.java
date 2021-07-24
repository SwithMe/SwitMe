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
    private Long room_idx;

    //foreign key study
    private Long study_idx;

    //foreign key user
    private Long leader_idx;

    //foreign key user
    private Long inquire_idx;

    @OneToMany(mappedBy = "room")
    private List<ChatMessage> messageList;

    @Builder
    public ChatRoom(Long study_idx, Long leader_idx, Long inquire_idx){
        this.study_idx = study_idx;
        this.leader_idx = leader_idx;
        this.inquire_idx = inquire_idx;
    }
}
