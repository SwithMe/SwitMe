package com.watch.switme.service;

import com.watch.switme.dto.makeStudyDto;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@RequiredArgsConstructor
@Service
public class StudyService {
    private final StudyRepository studyRepository;

    @Transactional
    public Integer add(makeStudyDto makeStudyDto){ return studyRepository.save(makeStudyDto.toEntity()).getStudy_idx();}



}
