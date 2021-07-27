package com.watch.switme.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.lang.reflect.Member;

@Getter
@NoArgsConstructor
public class BoardCreateRequestDto {
    private Member member;
    private String title;
    private String content;

    @Builder
    public BoardCreateRequestDto(Member member, String title, String content) {
        this.member = member;
        this.title = title;
        this.content = content;
    }

}
