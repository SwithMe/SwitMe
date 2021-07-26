package com.watch.switme.controller;

import com.watch.switme.dto.*;
import com.watch.switme.repository.JpaInterface.ChatMessageInterface;
import com.watch.switme.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chat")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @PostMapping("/makeroom")
    public MakeRoomResponseDto makeRoom(@RequestBody MakeRoomDto makeRoomDto){
        Long study_idx = makeRoomDto.getStudy_idx();
        Long inquirer_idx = makeRoomDto.getUser_idx();

        //study idx로 leader_idx 검색
        Long leader_idx = (long)100;
        ChatRoomDto chatRoomDto = ChatRoomDto.builder().study_idx(study_idx).leader_idx(leader_idx).inquirer_idx(inquirer_idx).build();
        System.out.println(chatRoomDto);
        Long room_idx = chatRoomService.save(chatRoomDto);

        MakeRoomResponseDto makeRoomResponseDto = new MakeRoomResponseDto(room_idx);
        return makeRoomResponseDto;
    }

    @GetMapping("/room_list/{user_idx}")
    public List<RoomListResponseDto> roomList(@PathVariable("user_idx") long user_idx){

        return chatRoomService.getRoomList(user_idx);
    }

    @GetMapping("/room/{room_idx}")
    public List<ChatMessageInterface> roomDetail(@PathVariable("room_idx") Long room_idx){
        return chatRoomService.getRoomDetail(room_idx);
    }

    @DeleteMapping("/deleteroom/{room_idx}")
    public void deleteRoom(@PathVariable("room_idx") Long room_idx){
        chatRoomService.deleteRoom(room_idx);
    }
}

//오류 처리, @transaction, foreign key 연결, api test 및 소켓 테스트
