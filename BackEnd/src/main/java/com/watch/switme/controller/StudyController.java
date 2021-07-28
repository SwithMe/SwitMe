package com.watch.switme.controller;

import com.watch.switme.domain.Study;
import com.watch.switme.dto.makeStudyDto;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.service.StudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    StudyRepository studyRepository;

    //온/오프라인 스터디 개설하기
    /**@PostMapping("/array/enroll")
    public makeStudyDto enrollStudy(@RequestBody makeStudyDto makeStudydto) {
        Integer Study_idx = makeStudydto.getStudy_idx();



    }**/

    //스터디 수정하기
    @PostMapping("/array/fix/{study_idx}")
    public void fixStudyDetail(@PathVariable int study_idx){

    }

    //스터디 세부사항 보여주기
    @GetMapping("/array/{study_idx}")
    public void showStudyDetail(@PathVariable int study_idx){

    }

    //스터디 탈퇴하기
    @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
    public void LeaveStudy(@PathVariable("user_idx") Long user_idx, @PathVariable("stud_idx") Long study_idx){
    }

    //스터디 가입하기
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public void JoinStudy(@PathVariable int user_udx, @PathVariable int study_idx){

    }



}
