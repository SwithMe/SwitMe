package com.watch.switme.controller;

import com.watch.switme.domain.Study;
import com.watch.switme.dto.makeStudyDto;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    StudyRepository studyRepository;

    @Autowired
    public StudyController(StudyRepository studyRepository){
        this.studyRepository=studyRepository;
    }
    //온/오프라인 스터디 개설하기

    @PostMapping("/array/enroll")
    public void createnewStudy(@RequestBody Study study){
        // 제약조건을 통과못하면 error 리턴한다.
        // 여기 채워야함!
            studyRepository.save(study);
    }
    //전체 스터디 리스트 가져오기.
    @GetMapping("/alllist")
    public Iterable<Study> list(){
        return studyRepository.findAll();
    }
    //스터디 수정하기
    @PostMapping("/array/fix/{study_idx}")
    public void fixStudyDetail(@PathVariable int study_idx){

    }

    //스터디 세부사항 보여주기
    @PostMapping("/array/{title}")
    public Iterable<Study> showStudyDetail(@PathVariable String title){
        System.out.println(title);
        return studyRepository.findByTitle(title);
    }

    //스터디 탈퇴하기
    @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
    public void LeaveStudy(@PathVariable int user_udx, @PathVariable int study_idx){

    }

    //스터디 가입하기
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public void JoinStudy(@PathVariable int user_udx, @PathVariable int study_idx){

    }
}
