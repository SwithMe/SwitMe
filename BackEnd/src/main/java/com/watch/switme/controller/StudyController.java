package com.watch.switme.controller;

import com.watch.switme.domain.*;
import com.watch.switme.dto.*;
import com.watch.switme.exception.NoResultFromDBException;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserDataExtraRepository;
import com.watch.switme.repository.UserRepository;
import com.watch.switme.service.S3Service;
import com.watch.switme.service.StudyService;
import com.watch.switme.service.UserStudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;



@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/list")
public class StudyController {
    private final UserStudyService userStudyService;
    private final StudyService studyService;
    private final StudyRepository studyRepository;
    private final UserRepository userRepository;
    private final UserDataExtraRepository userDataExtraRepository;

    private final S3Service s3Service;

    //온/오프라인 스터디 개설하기
    // 3. 사진 넣는 거 바꾸기 resources save /server 주소 /폴더 위치
    //makestudydto 를 받는다 (고 생각)
    @PostMapping("/array/enroll")
    public SuccessResponseDto createnewStudy(MakeStudyDto makeStudyDto) throws IOException {
        User user = userRepository.findFirstByUserIdx(makeStudyDto.getLeader());
        int temp = user.getManner_temperature();
        MultipartFile file = makeStudyDto.getImage();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        String current_date = simpleDateFormat.format(System.currentTimeMillis());

        String file_name = current_date+file.getOriginalFilename();;
        String file_url = s3Service.upload(file, file_name);

        Study study = Study.builder()
                .title(makeStudyDto.getTitle())
                .type(makeStudyDto.getType())
                .studyIntro(makeStudyDto.getStudyIntro())
                .image(file_url)
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

        Study saved_study = studyService.saveStudy(study);
        userStudyService.joinLeader(user, saved_study);

        return SuccessResponseDto.builder().success(true).build();
    }

    //스터디 수정하기
    @PutMapping("/array/fix/{study_idx}")
    public SuccessResponseDto edit(@PathVariable("study_idx") Long study_idx, MakeStudyDto makeStudyDto) throws IOException{
        MultipartFile file = makeStudyDto.getImage();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        String current_date = simpleDateFormat.format(System.currentTimeMillis());

        String file_name = current_date+file.getOriginalFilename();;
        String file_url = s3Service.upload(file, file_name);

        studyService.updateStudy(study_idx, makeStudyDto, file_url);

        return SuccessResponseDto.builder().success(true).build();
    }

    //스터디 가입하기
    @PostMapping("/array/join/{user_idx}/{study_idx}")
    public String JoinStudy(@PathVariable Long user_idx, @PathVariable Long study_idx) {
        return userStudyService.join(user_idx, study_idx);
    }

    //스터디 탈퇴하기
    @DeleteMapping("/array/leave/{user_idx}/{study_idx}")
    public void LeaveStudy(@PathVariable("user_idx") long user_idx, @PathVariable("study_idx") Long study_idx) {
        userStudyService.leave(user_idx, study_idx);
    }

    //스터디 세부사항 보여주기
    //함수 추가
    @GetMapping("/array/study/{study_idx}")
    public StudyDetailResponse showStudyDetail(@PathVariable Long study_idx) {
        Study study = studyRepository.findByStudy_idx(study_idx);
        String leader_name = userRepository.findFirstByUserIdx(study.getLeader()).getRealname();
        StudyDetailResponse studyDetailResponse = StudyDetailResponse.builder()
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
                .participant(study.getParticipant())
                .build();
        return studyDetailResponse;
    }

    //스터디 가입여부 확인하기
    @GetMapping("/array/status/{user_idx}/{study_idx}")
    public UserStudy statusStudy(@PathVariable Long user_idx, @PathVariable Long study_idx) {
        return userStudyService.compare(user_idx, study_idx);
    }

    //스터디 검색 기능
    @PostMapping("/array")
    public List<StudyListResponseDto> example(@RequestBody SearchStudyDto searchStudyDto) {
        List<Study> studyListList = studyRepository.findAll();
        List<StudyListResponseDto> SearchStudy = new ArrayList<>();

        for (Study study : studyListList) {
            User user=userRepository.findById(study.getLeader()).orElseThrow(()-> new NoResultFromDBException("데이터가 존재하지 않습니다."));
            UserDataExtra userDataExtra=userDataExtraRepository.findByUserIdx(study.getLeader()).orElse(null);
            String img="";
            if(userDataExtra!=null) img=userDataExtra.getSelfImage();
            StudyListResponseDto studyListResponseDto = StudyListResponseDto.builder()
                    .study_idx(study.getStudy_idx())
                    .avgMannerTemperature(study.getAvgMannerTemperature())
                    .image(study.getImage())
                    .activate(study.getActivate())
                    .leader(study.getLeader())
                    .leader_name(user.getRealname())
                    .leader_image(img)
                    .title(study.getTitle())
                    .size(study.getSize())
                    .tags(study.getTags())
                    .participant(study.getParticipant())
                    .type(study.getType())
                    .build();
            SearchStudy.add(studyListResponseDto);
            System.out.println("");
        }
        return SearchStudy;
    }

    @PostMapping("/array/find")
    public List<StudyListResponseDto> example2(@RequestBody SearchStudyDto searchStudyDto) {
        List<StudyListResponseDto> SearchStudy = new ArrayList<>();

        if(searchStudyDto.getTitle()==null){
            return SearchStudy;
        }
        if(searchStudyDto.getTitle()==null&&searchStudyDto.getTags()==null&&
                searchStudyDto.getType()==null&&searchStudyDto.getActivate()==null&&searchStudyDto.getLeader()==null){
            return SearchStudy;
        }
        List<Study> studyListList = studyRepository.getFilterQuery(searchStudyDto.getLeader(), searchStudyDto.getTitle(), searchStudyDto.getSize(), searchStudyDto.getTags(),searchStudyDto.getType());

        for (Study study : studyListList) {
            User user=userRepository.findById(study.getLeader()).orElseThrow(()-> new NoResultFromDBException("데이터가 존재하지 않습니다."));
            UserDataExtra userDataExtra=userDataExtraRepository.findByUserIdx(study.getLeader()).orElse(null);
            String img="";
            if(userDataExtra!=null) img=userDataExtra.getSelfImage();
            StudyListResponseDto studyListResponseDto = StudyListResponseDto.builder()
                    .study_idx(study.getStudy_idx())
                    .avgMannerTemperature(study.getAvgMannerTemperature())
                    .image(study.getImage())
                    .activate(study.getActivate())
                    .leader(study.getLeader())
                    .leader_name(user.getRealname())
                    .leader_image(img)
                    .title(study.getTitle())
                    .size(study.getSize())
                    .tags(study.getTags())
                    .participant(study.getParticipant())
                    .type(study.getType())
                    .build();
            SearchStudy.add(studyListResponseDto);
            System.out.println("");
        }
        return SearchStudy;
    }
}



