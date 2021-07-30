package com.watch.switme.controller;

import com.watch.switme.domain.Study;
import com.watch.switme.dto.JoinStudyDto;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.dto.SearchResultDto;
import com.watch.switme.dto.SearchStudyDto;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserStudyRepository;
import com.watch.switme.service.StudyService;
import com.watch.switme.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.directory.SearchResult;
import java.util.List;

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
        // 사진 넣는 거 바꾸기
        // resources save /server 주소 /폴더 위치
        studyRepository.save(study);
    }

    // 스터디 개설
    //

    //스터디 만들기2 (테스트 필요)
    @GetMapping("/array/enroll")
    public MakeStudyDto enrollStudy(){
        Study study = studyService.findByStudyIdx(enrollStudy().getStudy_idx());
        //Long UserId
        String userImage = study.getImage();

        MakeStudyDto makestudyDto = MakeStudyDto.builder()
                .study_idx(study.getStudy_idx())
                .studyIntro(study.getStudyIntro())
                .image(userImage)
                .extra(study.getExtra())
                .link(study.getLink())
                .location(study.getLocation())
                .size(study.getSize())
                .tags(study.getTags())
             //   .leader(UserId)
                .leader(study.getLeader())
                .termend(study.getTermend())
                .termstart(study.getTermstart())
                .timeend(study.getTimeend())
                .timestart(study.getTimestart())
                .title(study.getTitle())
                .type(study.getType())
                .build();
        return makestudyDto;
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
    // 1. 가입하려는 사람의 user_idx 로 가입하려는 사람을 확인
    // 2. study idx 를 받아서 어디에 가입하려는지 확인
    @PostMapping("/array/join/{user_idx}/{study_idx}")
    public JoinStudyDto JoinStudy(@PathVariable Long user_idx, @PathVariable Long study_idx){

        //User user = userService.findByUserIdx(user_idx);
        //Study study =studyService.findByStudyIdx(study_idx);

        JoinStudyDto joinStudyDto = JoinStudyDto.builder()
                .amLeader("N")
                .studyIdx(study_idx)
                .userIdx(user_idx) //t수정수정수정
                .warning(0)
                .build();
        return joinStudyDto;
    }

    /* 삭제 예정 .
    //스터디 가입하기2
    @PutMapping("/array/join/{user_idx}/{study_idx}")
    public void JoinStudy(@PathVariable Long user_idx, @PathVariable Long study_idx){
        return userStudyRepository.findByUserIdx(user_idx);
    }*/

    //스터디 탈퇴하기 //User_study 이용하기 (테스트 필요함)
    @DeleteMapping("/array/leave/{user_study_idx}")
    public void LeaveStudy(@PathVariable Long user_study_idx){
        userStudyRepository.deleteById(user_study_idx);
    }


    //스터디 세부사항 보여주기 (uri 수정 버전 테스트 필요함)
    @GetMapping("/array/study/{study_idx}")
    public Study showStudyDetail(@PathVariable Long study_idx){
        return studyRepository.findFirstByStudyIdx(study_idx);
    }



    @PostMapping("/array")
    public List<Study> example(@RequestBody SearchStudyDto searchStudyDto){
        return studyRepository.getQuery
                (
                searchStudyDto.getLeader(),
                searchStudyDto.getTitle(),
                searchStudyDto.getSize(),
                searchStudyDto.getType(),
                searchStudyDto.getActivate()
                );
    }

}
