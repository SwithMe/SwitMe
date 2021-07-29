package com.watch.switme.dto;

import com.watch.switme.domain.Study;
import com.watch.switme.domain.Timer;
import com.watch.switme.domain.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TimerCreateRequestDto {


    private String name;
    private User user;

    @Builder
    public TimerCreateRequestDto(String name, User user) {
        this.name = name;
        this.user=user;
    }

    public Timer toEntity(){
        return Timer.builder()
                .name(name)
                .user(user)
                .build();
    }

}
