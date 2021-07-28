package com.watch.switme.dto;


import com.watch.switme.domain.Study;
import com.watch.switme.domain.Timer;
import com.watch.switme.domain.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TimerDto {
    private Long timer_idx;
    private String name;
    private User user;
    private Study study;

    public Timer toEntity(){
        Timer timer=Timer.builder()
                .timer_idx(timer_idx)
                .name(name)
                .user(user)
                .study(study)
                .build();
        return timer;
    }

    @Builder
    public TimerDto(Long timer_idx, String name, User user, Study study) {
        this.timer_idx = timer_idx;
        this.name = name;
        this.user = user;
        this.study = study;
    }
}
