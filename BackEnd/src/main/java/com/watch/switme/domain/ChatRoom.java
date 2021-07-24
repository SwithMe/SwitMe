package com.watch.switme.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

}
