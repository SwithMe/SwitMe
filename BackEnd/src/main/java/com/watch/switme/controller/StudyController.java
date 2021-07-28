package com.watch.switme.controller;

import com.watch.switme.dto.Study;
import com.watch.switme.dto.StudyDTO;
import com.watch.switme.repository.StudyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    StudyRepository studyRepository;

    //온/오프라인 스터디 개설하기
    @PostMapping("/array/enroll")
    public void StudyEnroll(@RequestBody StudyDTO studyDTO) {
    }

    //스터디 수정하기
    @PostMapping("/array/fix/{study_idx}")
    public void fixStudyDetail(@PathVariable int study_idx){

    }

    /**스터디 세부사항
    @GetMapping("/array/{study_idx}")
    public Study StudyDetail(@PathVariable int study_idx){
        int post_idx= study_idx;
        Optional<Study> study = StudyRepository.findById(post_idx);
        return study.get();
    }**/

    //스터디 탈퇴하기
    @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
    public void StudyLeave(@PathVariable int user_udx, @PathVariable int study_idx){

    }

    //스터디 가입하기
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public void StudyJoin(@PathVariable int user_udx, @PathVariable int study_idx){

    }



}
