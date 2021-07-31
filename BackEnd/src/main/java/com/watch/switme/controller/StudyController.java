package com.watch.switme.controller;

import com.watch.switme.domain.*;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.dto.SearchStudyDto;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserRepository;
import com.watch.switme.repository.UserStudyRepository;
import com.watch.switme.service.UserStudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.sound.midi.SysexMessage;
import javax.swing.plaf.synth.SynthTextAreaUI;

import java.util.List;

/*
* 2. 스터디 가입하기 채우기
* 4. 스터디 수정하기
* */


@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    UserStudyService userStudyService;
    @Autowired
    StudyRepository studyRepository;
    @Autowired
    UserRepository userRepository;
    UserStudyRepository userStudyRepository;

    @Autowired
    public StudyController(StudyRepository studyRepository) {
        this.studyRepository = studyRepository;
    }

    //온/오프라인 스터디 개설하기
    // 3. 사진 넣는 거 바꾸기 resources save /server 주소 /폴더 위치
    //makestudydto 를 받는다 (고 생각)
    @PostMapping("/array/enroll")
    public Study createnewStudy(@RequestBody MakeStudyDto makeStudyDto) {
        System.out.println("\n\n안" + makeStudyDto.getLeader());
        User user = userRepository.findFirstByUserIdx(makeStudyDto.getLeader());
        int temp = user.getManner_temperature();
        System.out.println(user.getManner_temperature());
        // study main 에 저장하면 됨.
        Study study = Study.builder()
                .title(makeStudyDto.getTitle())
                .type(makeStudyDto.getType())
                .studyIntro(makeStudyDto.getStudyIntro())
                .image(makeStudyDto.getImage())
                .location(makeStudyDto.getLocation())
                .link(makeStudyDto.getLink())
                .size(makeStudyDto.getSize())
                .tags(makeStudyDto.getTags())
                .leader((long) makeStudyDto.getLeader())
                .activate("N")
                .termend(makeStudyDto.getTermend())
                .termstart(makeStudyDto.getTermstart())
                .timeend(makeStudyDto.getTimeend())
                .timestart(makeStudyDto.getTimestart())
                .avgMannerTemperature(temp)
                .build();
        return studyRepository.save(study);
        }

    //스터디 수정하기
    //@PostMapping("/array/fix/{study_idx}")
    //public Iterable<Study> edit(@PathVariable Long study_idx, @RequestBody Study study) {
    //   }

    //전체 스터디 리스트 가져오기.
    @GetMapping("/alllist")
    public Iterable<Study> list(){
        return studyRepository.findAll();
    }

    //스터디 가입하기
    @PostMapping("/array/join/{user_idx}/{study_idx}")
    public Long JoinStudy (@PathVariable Long user_idx, @PathVariable Long study_idx){
        return userStudyService.join(user_idx, study_idx);
        }

    //스터디 탈퇴하기
    @DeleteMapping("/array/leave/{user_study_idx}")
    public void LeaveStudy ( @PathVariable("user_study_idx") long user_study_idx){
        userStudyService.leave(user_study_idx);}

        //스터디 가입여부 확인하기
        //@GetMapping("/array/status/{user_idx}/{study_idx}")
        //public void statuStudy(){
        // }

        //스터디 세부사항 보여주기
        @GetMapping("/array/study/{study_idx}")
        public Study showStudyDetail (@PathVariable Long study_idx){
            return studyRepository.findByStudy_idx(study_idx);
        }

        //스터디 검색 기능
        @PostMapping("/array")
        public List<Study> example (@RequestBody SearchStudyDto searchStudyDto){
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

