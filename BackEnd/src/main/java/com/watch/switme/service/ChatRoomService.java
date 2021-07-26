package com.watch.switme.service;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.domain.ChatRoom;
import com.watch.switme.dto.ChatRoomDto;
import com.watch.switme.dto.MessageListResponseDto;
import com.watch.switme.dto.RoomListResponseDto;
import com.watch.switme.repository.ChatMessageRepository;
import com.watch.switme.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;

    public Long save(ChatRoomDto chatRoomDto){
        return chatRoomRepository.save(chatRoomDto.toEntity()).getRoomIdx();
    }

    public List<RoomListResponseDto> getRoomList(Long user_idx){
        List<ChatRoom> chatRoomList = chatRoomRepository.findByInquirerIdx(user_idx);
        List<RoomListResponseDto> roomListResponseDtoList = new ArrayList<>();

        for(ChatRoom room : chatRoomList){
            ChatMessage chatMessage = chatMessageRepository.findFirstByRoom_RoomIdxOrderByTimeDesc(room.getRoomIdx());

            RoomListResponseDto roomListResponseDto = new RoomListResponseDto();

            roomListResponseDto.builder()
                    .room_idx(room.getRoomIdx())
                    .room_name("이름")    //foreign user
                    .message(chatMessage.getMessage())
                    .notification(chatMessageRepository.countByCheckEquals(0))
                    .build();

            roomListResponseDtoList.add(roomListResponseDto);
        }

        return roomListResponseDtoList;
    }

    public List<MessageListResponseDto> getRoomDetail(Long room_idx){
        return chatMessageRepository.findByRoom_RoomIdx(room_idx);
    }

    public void deleteRoom(Long room_idx){
        chatRoomRepository.deleteById(room_idx);
    }
}
