package com.watch.switme.controller;

import com.watch.switme.dto.BoardCreateRequestDto;
import com.watch.switme.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/list/")
public class StudyController {

    @Autowired
    private BoardService boardService;

    //게시글 불러오가 POST
    @GetMapping("/array")
    public void StudyListPost(){
    }

    @GetMapping("/array/enroll")
    public Long StudyEnrollGet(@RequestBody BoardCreateRequestDto requestDto) {
        return boardService.create(requestDto);
    }

    @GetMapping("/array/{study_idx}")
    public void StudyDetailGet(){
    }

    @GetMapping("/array/leave/{user_idx}/{study_idx}")
    public void StudyLeaveGet(){

    }

    @GetMapping("/array/join/{user_idx}/{study_idx}")
    public void StudyJoinGet(){

    }

}
