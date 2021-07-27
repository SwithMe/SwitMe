package com.watch.switme.service;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.domain.ChatRoom;
import com.watch.switme.dto.ChatRoomDto;
import com.watch.switme.dto.RoomListResponseDto;
import com.watch.switme.repository.ChatMessageRepository;
import com.watch.switme.repository.ChatRoomRepository;
import com.watch.switme.dto.ChatMessageInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;

    @Transactional
    public Long save(ChatRoomDto chatRoomDto){
        return chatRoomRepository.save(chatRoomDto.toEntity()).getRoomIdx();
    }

    @Transactional
    public List<RoomListResponseDto> getRoomList(Long user_idx){
        List<ChatRoom> chatRoomList = chatRoomRepository.findByInquirerIdx(user_idx);
        List<RoomListResponseDto> roomListResponseDtoList = new ArrayList<>();

        for(ChatRoom room : chatRoomList){
            ChatMessage chatMessage = chatMessageRepository.findFirstByRoom_RoomIdxOrderByTimeDesc(room.getRoomIdx());
            System.out.println(chatMessage);
            String message;
            if (chatMessage == null) {
                message = "";
            }else{
                message = chatMessage.getMessage();
            }
            System.out.println(message);

            //room_name에 스터디 이름으로 넣기
            String room_name = "이름";
            String other_user;

            if(room.getInquirerIdx() == user_idx){
                other_user = "리더";
                // 이름 얻기 room.getLeaderIdx();
            } else{
                other_user = "질문";
                // 이름 얻기 room.getInquirerIdx();
            }

            RoomListResponseDto roomListResponseDto = RoomListResponseDto.builder()
                    .room_idx(room.getRoomIdx())
                    .room_name(room_name)
                    .other_user(other_user)
                    .message(message)
                    .notification(chatMessageRepository.countByCheckEquals(0))
                    .build();

            roomListResponseDtoList.add(roomListResponseDto);
        }

        return roomListResponseDtoList;
    }

    @Transactional
    public List<ChatMessageInterface> getRoomDetail(Long room_idx){

        return chatMessageRepository.findByRoom_RoomIdx(room_idx);
    }

    @Transactional
    public void deleteRoom(Long room_idx){
        chatRoomRepository.deleteById(room_idx);
    }

    @Transactional
    public ChatRoom findRoom(Long room_idx){
        return chatRoomRepository.findById(room_idx).get();
    }
}
