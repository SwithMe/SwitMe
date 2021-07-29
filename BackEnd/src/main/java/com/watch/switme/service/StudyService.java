package com.watch.switme.service;

import com.watch.switme.domain.Study;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StudyService {

    @Autowired
    private final StudyRepository studyRepository;
    public Study findByStudyIdx(Long study_idx){
        return (Study) studyRepository.findFirstByStudyIdx(study_idx);
    }

    //스터디 추가..?
    public void createStudy(Study study){
        studyRepository.save(study);
    }


}
