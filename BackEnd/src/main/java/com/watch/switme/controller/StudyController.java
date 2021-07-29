package com.watch.switme.controller;

import com.watch.switme.domain.Study;
import com.watch.switme.dto.makeStudyDto;
import com.watch.switme.domain.UserStudy;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserStudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    StudyRepository studyRepository;
    UserStudyRepository userStudyRepository;

    @Autowired
    public StudyController(StudyRepository studyRepository){
        this.studyRepository=studyRepository;
    }

    //온/오프라인 스터디 개설하기

    @PostMapping("/array/enroll")
    public void createnewStudy(@RequestBody Study study){
        /*Optional<Study> exist=studyRepository.findByTitle(study.getTitle());
        if(exist.isPresent()) {
            throw new Exception(HttpStatus.CONFLICT, "오류");
        }*/
        // 제약조건을 통과못하면 error 리턴한다.
        // 여기 채워야함!
        // 사진 넣는 거 바꾸기
        // resiruces save /server 주소 /폴더 위치
        studyRepository.save(study);
    }
    //전체 스터디 리스트 가져오기.
    @GetMapping("/alllist")
    public Iterable<Study> list(){
        return studyRepository.findAll();
    }
    //스터디 수정하기
  //  @PutMapping("/array/fix/{study_idx}")
  //  public Iterable<Study> edit(@PathVariable Long study_idx, @RequestBody Study study){
       // studyRepository.findAllByStudy_idx(study_idx);
   // }

    //스터디 세부사항 보여주기 (uri 수정 버전 테스트 필요함)
    @PostMapping("/array/study/{study_idx}")
    public Iterable<Study> showStudyDetail(@PathVariable Long study_idx){
        System.out.println(study_idx);
        return studyRepository.findAllByStudy_idx(study_idx);
    }

    //스터디 탈퇴하기
    /*@PostMapping("/array/{title}")
    public Iterable<Study> showStudyDetail(@PathVariable String title){
        System.out.println(title);
        return studyRepository.findByTitle(title);
    }*/

    //스터디 가입하기 //User_study 이용하기
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public Iterable<UserStudy> Join(@PathVariable Long user_idx, @PathVariable Long study_idx, @RequestBody UserStudy userstudy){

        return userStudyRepository.findByUserIdx(user_idx);
    }

    //스터디 탈퇴하기 //User_study 이용하기 (테스트 필요함)
    @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
    public void LeaveStudy(@PathVariable Long user_idx, @PathVariable Long study_idx){
        System.out.println(study_idx);
        System.out.println(user_idx);
        userStudyRepository.deleteById(study_idx);
    }

    //스터디 가입하기
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public void JoinStudy(@PathVariable int user_udx, @PathVariable int study_idx){

    }
    /* 스터디 검색/리스트 관련 */

    //스터디 세부사항 보여주기 (검색과 구현동일)
    @PostMapping("/array/{title}")
    public Iterable<Study> showStudyDetail(@PathVariable String title){
        System.out.println(title);
        return studyRepository.findByTitle(title);
    }

    //스터디 세부사항 보여주기 (검색과 구현동일)
    @PostMapping("/array/{leader}")
    public Iterable<Study> getStudyByLeader(@PathVariable int leader){
        //System.out.println(title);
        return studyRepository.findAllByleader(leader);
    }




}
