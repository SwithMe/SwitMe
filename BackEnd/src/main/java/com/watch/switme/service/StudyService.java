package com.watch.switme.service;

import com.watch.switme.domain.Study;
import com.watch.switme.dto.MakeStudyDto;
import com.watch.switme.dto.RecomStudyResDto;
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
    private final StudyRepository studyRepository;
    private final UserStudyRepository userStudyRepository;

    @Transactional
    public Study saveStudy(Study study){
        return studyRepository.save(study);
    }

    @Transactional
    public Study updateStudy(Long study_idx, MakeStudyDto makeStudyDto, String file_url) {
        Study study = studyRepository.findById(study_idx).get();
        study.update(makeStudyDto, file_url);
        return study;
    }

    @Transactional
    public Study findByStudyIdx(Long study_idx) {
        return studyRepository.findFirstByStudyIdx(study_idx);
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
