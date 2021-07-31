package com.watch.switme.dto;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.domain.ChatRoom;
import com.watch.switme.domain.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
public class ChatMessageDto {
    private String message;
    private User sender;
    private ChatRoom room;
    private LocalDateTime time;

    //sender idx도 수정..
    @Builder
    public ChatMessageDto(String message, User sender, ChatRoom room, LocalDateTime time){
        this.message = message;
        this.sender = sender;
        this.room = room;
        this.time = time;
    }

    public ChatMessage toEntity(){
        return ChatMessage.builder()
                .message(this.message)
                .sender(this.sender)
                .room(this.room)
                .time(time)
                .build();
    }
}
