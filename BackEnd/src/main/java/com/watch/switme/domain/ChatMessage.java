package com.watch.switme.domain;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@ToString(exclude = "room")
@Getter
@NoArgsConstructor
@Table(name="chat_message")
@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_idx", nullable = false)
    private Long messageIdx;

    @Column(name = "message", nullable = false)
    private String message;

<<<<<<< HEAD
    @Column(name = "send_time")
=======
    @Column(name = "sned_time")
>>>>>>> 017eb169163de30eda70f63a65c5326d030999fa
    private LocalDateTime sendTime;

    @ManyToOne
    @JoinColumn(name="sender_idx")
    private User sender;

    @ManyToOne
    @JoinColumn(name="room_idx")
    private ChatRoom room;

    @Column(columnDefinition = "TINYINT", name="check_read")
    private int checkRead;

    @Builder
    public ChatMessage(String message, User sender, ChatRoom room, LocalDateTime time, int check){
        this.message = message;
        this.sender = sender;
        this.room = room;
        this.sendTime = time;
        this.checkRead = check;
    }

    public void checkUpdate(int check){
        this.checkRead = check;
    }

}
