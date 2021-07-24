package com.watch.switme.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long message_idx;

    private String message;

    private Date time;

    //foreign key user
    private Long Sender_idx;

    @ManyToOne
    @JoinColumn(name="room_idx")
    private ChatRoom room;
}
