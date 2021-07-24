package com.watch.switme.dto;

import com.watch.switme.domain.ChatRoom;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChatRoomDto {
    private Long study_idx;
    private Long leader_idx;
    private Long inquirer_idx;

    @Builder
    public ChatRoomDto(Long study_idx, Long leader_idx, Long inquirer_idx){
        this.study_idx = study_idx;
        this.leader_idx = leader_idx;
        this.inquirer_idx = inquirer_idx;
    }

    public ChatRoom toEntity(){
        return ChatRoom.builder()
                .study_idx(study_idx)
                .leader_idx(leader_idx)
                .inquire_idx(inquirer_idx)
                .build();
    }
}
