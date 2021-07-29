package com.watch.switme.dto;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.domain.ChatRoom;
import com.watch.switme.domain.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class ChatMessageDto {
    private String message;
    private User sender;
    private ChatRoom room;

    //sender idx도 수정..
    @Builder
    public ChatMessageDto(String message, User sender, ChatRoom room){
        this.message = message;
        this.sender = sender;
        this.room = room;
    }

    public ChatMessage toEntity(){
        return ChatMessage.builder()
                .message(this.message)
                .sender(this.sender)
                .room(this.room)
                .build();
    }
}
