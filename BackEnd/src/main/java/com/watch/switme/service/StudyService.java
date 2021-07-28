package com.watch.switme.service;

import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@RequiredArgsConstructor
@Service
public class StudyService {
    private final StudyRepository studyRepository;

    @Transactional
    public void leaveStudy(Long study_idx){
        studyRepository.deleteById(study_idx);
    }



}
