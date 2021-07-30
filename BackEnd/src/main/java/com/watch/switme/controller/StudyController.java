package com.watch.switme.controller;

import com.watch.switme.domain.Study;
import com.watch.switme.domain.User;
import com.watch.switme.domain.UserStudy;
import com.watch.switme.domain.UserYesOrNo;
import com.watch.switme.dto.JoinStudyDto;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.repository.JoinStudyRepository;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserStudyRepository;
import com.watch.switme.service.StudyService;
import com.watch.switme.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/*
* 1. 스터디 개설하기 테스트
* 2. 스터디 가입하기 채우기
* 3. 스터디 탈퇴하기
* 4. 스터디 수정하기
* 5. 스터디 세부사항 테스트
* */


@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    private StudyService studyService;
    private UserService userService;

    StudyRepository studyRepository;
    UserStudyRepository userStudyRepository;
    JoinStudyRepository joinStudyRepository;

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
        //leader 값에 만드는 사람의 study_idx 넣기
        //leader name 추가하기
        // 사진 넣는 거 바꾸기
        // resources save /server 주소 /폴더 위치
        studyRepository.save(study);
    }


    //전체 스터디 리스트 가져오기.
    @GetMapping("/alllist")
    public Iterable<Study> list(){
        return studyRepository.findAll();
    }

    //스터디 수정하기
    //@PutMapping("/array/fix/{study_idx}")
    //public Iterable<Study> edit(@PathVariable Long study_idx, @RequestBody Study study){
    //}

    //스터디 가입하기1 //User_study 이용하기
    @PostMapping("/array/join/{user_idx}/{study_idx}")
    public JoinStudyDto JoinStudy(@PathVariable Long user_idx, @PathVariable Long study_idx){
       // Study study = studyService.findByStudyIdx(study_idx);
       // UserYesOrNo studyActivate = study.getActivate();

        JoinStudyDto joinStudyDto = JoinStudyDto.builder()
                .amLeader(UserYesOrNo.N)
                .studyIdx(study_idx)
                .userIdx(user_idx)
                .warning(0)
                .joinDate(LocalDateTime.now())
                .activate(UserYesOrNo.Y)
                .build();
        return  joinStudyDto; //joinStudyRepository.save(joinStudyDto.toEntity()).getUserStudyIdx();
    }

    //스터디 탈퇴하기 //User_study 이용하기 (테스트 필요함)
    @DeleteMapping("/array/leave/{user_study_idx}")
    public void LeaveStudy(@PathVariable Long user_study_idx){
       // userStudyRepository.deleteByuser_study_idx(user_study_idx);
    }

    //스터디 세부사항 보여주기 (uri 수정 버전 테스트 필요함)
    @GetMapping("/array/study/{study_idx}")
    public Study showStudyDetail(@PathVariable Long study_idx){
        return studyRepository.findFirstByStudyIdx(study_idx);
    }

    /* 스터디 검색/리스트 관련 */

    //스터디 세부사항 보여주기 (검색과 구현동일)
    @PostMapping("/array/{title}")
    public Iterable<Study> showStudyDetail(@PathVariable String title){
        System.out.println(title);
        return studyRepository.findByTitle(title);
    }

    //스터디 세부사항 보여주기 (검색과 구현동일) ..long=>??
    @PostMapping("/array/{leader}")
    public Iterable<Study> getStudyByLeader(@PathVariable int leader){
        //System.out.println(leader);
        return studyRepository.findAllByleader(leader);
    }

}
