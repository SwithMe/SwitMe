package com.watch.switme.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@ToString(exclude = "room")
@Data
@NoArgsConstructor
@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageIdx;

    private String message;

    private Date time;

//    @ManyToOne
//    @JoinColumn(name="userIdx")
    private Long senderIdx;

    @ManyToOne
    @JoinColumn(name="roomIdx")
    private ChatRoom room;

    @Column(columnDefinition = "TINYINT")
    private int check;
}
