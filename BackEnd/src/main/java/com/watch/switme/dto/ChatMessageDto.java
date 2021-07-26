package com.watch.switme.dto;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.domain.ChatRoom;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class ChatMessageDto {
    private String message;
    private Long sender_idx;
    private ChatRoom room;

    //sender idx도 수정..
    @Builder
    public ChatMessageDto(String message, Long sender_idx, ChatRoom room){
        this.message = message;
        this.sender_idx = sender_idx;
        this.room = room;
    }

    public ChatMessage toEntity(){
        return ChatMessage.builder()
                .message(this.message)
                .sender_idx(this.sender_idx)
                .room(this.room)
                .build();
    }
}
