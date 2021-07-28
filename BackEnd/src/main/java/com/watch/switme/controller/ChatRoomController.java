package com.watch.switme.controller;

import com.watch.switme.dto.*;
import com.watch.switme.dto.ChatMessageInterface;
import com.watch.switme.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chat")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @PostMapping("/makeroom/user")
    public MakeRoomResponseDto makeRoom(@RequestBody MakeRoomDto makeRoomDto){
        Long study_idx = makeRoomDto.getStudy_idx();
        Long inquirer_idx = makeRoomDto.getUser_idx();
        Long leader_idx = makeRoomDto.getLeader_idx();

        ChatRoomDto chatRoomDto = ChatRoomDto.builder().study_idx(study_idx).leader_idx(leader_idx).inquirer_idx(inquirer_idx).build();
        System.out.println(chatRoomDto);
        Long room_idx = chatRoomService.save(chatRoomDto);

        MakeRoomResponseDto makeRoomResponseDto = new MakeRoomResponseDto(room_idx);
        return makeRoomResponseDto;
    }

    @PostMapping("/makeroom/leader")
    public MakeRoomResponseDto makeRoomLeader(@RequestBody MakeRoomLeaderDto makeRoomLeaderDto){
        Long study_idx = makeRoomLeaderDto.getStudy_idx();
        Long leader_idx = makeRoomLeaderDto.getLeader_idx();
        Long inquirer_idx = makeRoomLeaderDto.getMember_idx();

        ChatRoomDto chatRoomDto = ChatRoomDto.builder().study_idx(study_idx).leader_idx(leader_idx).inquirer_idx(inquirer_idx).build();
        Long room_idx = chatRoomService.save(chatRoomDto);

        MakeRoomResponseDto makeRoomResponseDto = new MakeRoomResponseDto(room_idx);
        return makeRoomResponseDto;
    }

    @GetMapping("/room_list/{user_idx}") //이미지 추가.. user
    public List<RoomListResponseDto> roomList(@PathVariable("user_idx") long user_idx){

        return chatRoomService.getRoomList(user_idx);
    }

    @GetMapping("/room/{room_idx}") //이미지 추가.. user
    public List<ChatMessageInterface> roomDetail(@PathVariable("room_idx") Long room_idx){
        return chatRoomService.getRoomDetail(room_idx);
    }

    @DeleteMapping("/deleteroom/{room_idx}")
    public void deleteRoom(@PathVariable("room_idx") Long room_idx){
        chatRoomService.deleteRoom(room_idx);
    }
}

//외부 테이블 연결... user study
