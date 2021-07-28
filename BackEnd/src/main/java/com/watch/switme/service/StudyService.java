package com.watch.switme.service;

import com.watch.switme.domain.Study;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StudyService {
    private final StudyRepository studyRepository;
    public Study findByStudyIdx(Long study_idx){
        return studyRepository.findFirstByStudyIdx(study_idx);
    }
}