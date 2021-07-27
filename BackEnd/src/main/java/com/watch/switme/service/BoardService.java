package com.watch.switme.service;

import com.watch.switme.dto.BoardCreateRequestDto;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class BoardService {
    private final StudyRepository boardRepository;

    @Transactional
    public Long create(BoardCreateRequestDto requestDto) {
        return boardRepository.save(requestDto.toEntity()).getId();
    }
}