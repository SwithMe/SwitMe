package com.watch.switme.controller;

import com.watch.switme.domain.*;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.dto.SearchStudyDto;
import com.watch.switme.dto.StudyDetailResponse;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserRepository;
import com.watch.switme.repository.UserStudyRepository;
import com.watch.switme.service.StudyService;
import com.watch.switme.service.UserStudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.sound.midi.SysexMessage;
import javax.swing.plaf.synth.SynthTextAreaUI;

import java.util.List;



@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {

    @Autowired
    UserStudyService userStudyService;
    @Autowired
    StudyService studyService;
    @Autowired
    StudyRepository studyRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    public StudyController(StudyRepository studyRepository) {
        this.studyRepository = studyRepository;
    }
    //온/오프라인 스터디 개설하기
    // 3. 사진 넣는 거 바꾸기 resources save /server 주소 /폴더 위치
    //makestudydto 를 받는다 (고 생각)
    @PostMapping("/array/enroll")
    public String createnewStudy(@RequestBody MakeStudyDto makeStudyDto){
        User user=userRepository.findFirstByUserIdx(makeStudyDto.getLeader());
        int temp=user.getManner_temperature();
        System.out.println(user.getManner_temperature());
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
                .activate(UserYesOrNo.Y)
                .termend(makeStudyDto.getTermend())
                .termstart(makeStudyDto.getTermstart())
                .timeend(makeStudyDto.getTimeend())
                .timestart(makeStudyDto.getTimestart())
                .avgMannerTemperature(temp)
                .participant(0)
                .build();
                studyRepository.save(study);
                return userStudyService.join(user.getUser_idx(),study.getStudy_idx());
        }

    //스터디 수정하기
    @PutMapping("/array/fix/{study_idx}")
    public Study edit(@PathVariable("study_idx") Long study_idx, @RequestBody MakeStudyDto makeStudyDto) {
        Study study01 = studyRepository.findById(study_idx).get();
        study01=studyService.updateOldStudy(study01, makeStudyDto);
        System.out.println(study01.getTitle());
        return studyRepository.save(study01);
    }

    //전체 스터디 리스트 가져오기.
    @GetMapping("/alllist")
    public Iterable<Study> list(){
        return studyRepository.findAll();
    }

    //스터디 가입하기
    @PostMapping("/array/join/{user_idx}/{study_idx}")
    public String JoinStudy (@PathVariable Long user_idx, @PathVariable Long study_idx){
        return userStudyService.join(user_idx, study_idx);
        }

    //스터디 탈퇴하기
     @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
        public void LeaveStudy(@PathVariable("user_idx") long user_idx, @PathVariable("study_idx") Long study_idx){
            userStudyService.leave(user_idx,study_idx);
    }

    //스터디 세부사항 보여주기
    //함수 추가
    @GetMapping("/array/study/{study_idx}")
    public StudyDetailResponse showStudyDetail(@PathVariable Long study_idx){
        Study study= studyRepository.findByStudy_idx(study_idx);
        String leader_name=userRepository.findFirstByUserIdx(study.getLeader()).getRealname();
        StudyDetailResponse studyDetailResponse= StudyDetailResponse.builder()
                .study_idx(study.getStudy_idx())
                .title(study.getTitle())
                .extra(study.getExtra())
                .image(study.getImage())
                .leader(study.getLeader())
                .studyIntro(study.getStudyIntro())
                .image(study.getImage())
                .location(study.getLocation())
                .link(study.getLink())
                .size(study.getSize())
                .type(study.getType())
                .tags(study.getTags())
                .leader((long) study.getLeader())
                .termend(study.getTermend())
                .termstart(study.getTermstart())
                .timeend(study.getTimeend())
                .timestart(study.getTimestart())
                .activate(study.getActivate())
                .leader_name(leader_name)
                .build();
        return studyDetailResponse;
    }

    //스터디 가입여부 확인하기
    @GetMapping("/array/status/{user_idx}/{study_idx}")
    public UserStudy statusStudy(@PathVariable Long user_idx, @PathVariable Long study_idx){
        return userStudyService.compare(user_idx, study_idx);
     }

    //스터디 검색 기능
    @PostMapping("/array")
    public List<Study> example (@RequestBody SearchStudyDto searchStudyDto) {

        /*
        if (searchStudyDto.getTags() != null) {
            ResultOfQuery=studyRepository.findAllByTagsContaining(searchStudyDto.getTags());
        }
        //if (searchStudyDto.getActivate() != null) {
        //    ResultOfQuery=studyRepository.findAllByActivate(searchStudyDto.getActivate());
       // }
        if (searchStudyDto.getType() != null) {
            ResultOfQuery=studyRepository.findAllByType(searchStudyDto.getType());
        };
        if(searchStudyDto.getTitle()!=null){
            ResultOfQuery=studyRepository.findAllByTitleContaining(searchStudyDto.getTitle());
        }*/

        return studyRepository.getFilterQuery(searchStudyDto.getLeader(), searchStudyDto.getTitle(), searchStudyDto.getSize(), searchStudyDto.getTags(),searchStudyDto.getType());
    }

                //studyRepository.findAllByTitleContaining(searchStudyDto.getTitle());
                //studyRepository.getLeader(searchStudyDto.getLeader());
                /*studyRepository.getQuery
                (
                        searchStudyDto.getLeader(),
                        searchStudyDto.getTitle(),
                        searchStudyDto.getSize(),
                        searchStudyDto.getType(),
                        searchStudyDto.getActivate()
                );*/


    }



