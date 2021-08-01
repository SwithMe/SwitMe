package com.watch.switme.service;

import com.watch.switme.domain.Study;
import com.watch.switme.domain.User;
import com.watch.switme.domain.UserRole;
import com.watch.switme.domain.UserYesOrNo;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.dto.RecomStudyResDto;
import com.watch.switme.dto.SignUpDTO;
import com.watch.switme.exception.NoResultFromDBException;
import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.UserStudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class StudyService {

    @Autowired
    private final StudyRepository studyRepository;
    private final UserStudyRepository userStudyRepository;

    @Transactional
    public Study update(Study study, MakeStudyDto makeStudyDto){
        study.update(study, makeStudyDto);
        return studyRepository.save(study);
    }

    /*
    @Transactional
    public User studyBuild(final SignUpDTO signUpDTO) {
        final User user = User.builder()
                .email(signUpDTO.getEmail())
                .pw(passwordEncoder.encode(signUpDTO.getPw()))
                .role(UserRole.ROLE_USER)
                .manner_temperature(70)
                .UserAgree(UserYesOrNo.Y)
                .realname(signUpDTO.getRealname())
                .isEnable(true)
                .build();
        return userRepository.save(user);
    }
    */


    @Transactional
    public Study findByStudyIdx(Long study_idx) {
        return studyRepository.findFirstByStudyIdx(study_idx);
    }

    public void leaveStudy(Long study_idx){
        studyRepository.deleteById(study_idx);
    }

    //스터디 추가..?
    public void createStudy(Study study){
        studyRepository.save(study);
    }

    @Transactional
    public List<RecomStudyResDto> getRecomStudyList(){

        List<Study> online=studyRepository.findTop12ByTypeOrderByAvgMannerTemperatureDesc("online");
        List<Study> offline=studyRepository.findTop12ByTypeOrderByAvgMannerTemperatureDesc("offline");


        if(online.isEmpty()&&offline.isEmpty()) throw new NoResultFromDBException("데이터가 존재하지 않습니다.");

        List <RecomStudyResDto> recomStudyResDtoList=new ArrayList<>();

        for(Study study:online){
            RecomStudyResDto recomStudyResDto = RecomStudyResDto.builder()
                    .study_idx(study.getStudy_idx())
                    .type(study.getType())
                    .title(study.getTitle())
                    .participant(study.getParticipant())
                    .avgMannerTemperature(study.getAvgMannerTemperature())
                    .tags(study.getTags())
                    .image(study.getImage())
                    .build();

            recomStudyResDtoList.add(recomStudyResDto);
        }

        for(Study study:offline){
            RecomStudyResDto recomStudyResDto = RecomStudyResDto.builder()
                    .study_idx(study.getStudy_idx())
                    .type(study.getType())
                    .title(study.getTitle())
                    .participant(study.getParticipant())
                    .avgMannerTemperature(study.getAvgMannerTemperature())
                    .tags(study.getTags())
                    .image(study.getImage())
                    .build();

            recomStudyResDtoList.add(recomStudyResDto);
        }
        return recomStudyResDtoList;
    }
}
