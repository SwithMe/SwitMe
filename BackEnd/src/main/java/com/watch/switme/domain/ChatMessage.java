package com.watch.switme.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
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

    @CreatedDate
    private LocalDateTime time;

//    @ManyToOne
//    @JoinColumn(name="userIdx")
    private Long senderIdx;

    @ManyToOne
    @JoinColumn(name="roomIdx")
    private ChatRoom room;

    @Column(columnDefinition = "TINYINT")
    private int check;

    @Builder
    public ChatMessage(String message, Long sender_idx, ChatRoom room){
        this.message = message;
        this.senderIdx = sender_idx;
        this.room = room;
        this.check = 0;
    }

    public void checkUpdate(int check){
        this.check = check;
    }

//    @PrePersist
//    public void chatTime(){
//        this.time = LocalDateTime.now();
//    }
}
