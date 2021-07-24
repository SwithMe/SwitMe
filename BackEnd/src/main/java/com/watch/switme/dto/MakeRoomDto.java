package com.watch.switme.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MakeRoomDto {
    private Long study_idx;
    private Long user_idx;

    public MakeRoomDto(Long study_idx, Long user_idx){
        this.study_idx = study_idx;
        this.user_idx = user_idx;
    }
}
