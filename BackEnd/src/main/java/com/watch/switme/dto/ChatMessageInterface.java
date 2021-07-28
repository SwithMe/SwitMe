package com.watch.switme.dto;

import lombok.Getter;

import java.util.Date;

public interface ChatMessageInterface {
    Long getRoom_RoomIdx();
    Long getSenderIdx(); //Sender_UserIdx
    String getMessage();
    Date getTime();
}
