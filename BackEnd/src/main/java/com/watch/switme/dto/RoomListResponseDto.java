package com.watch.switme.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RoomListResponseDto {
    private Long room_idx;
    private String room_name;
    private String other_user;
    private long notification;
    private String message;

    @Builder
    public RoomListResponseDto(Long room_idx, String room_name, String other_user, long notification, String message){
        this.room_idx = room_idx;
        this.room_name = room_name;
        this.other_user = other_user;
        this.notification = notification;
        this.message = message;
    }
}
