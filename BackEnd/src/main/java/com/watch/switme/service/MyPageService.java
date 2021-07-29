package com.watch.switme.service;

import com.watch.switme.repository.StudyRepository;
import com.watch.switme.repository.TimerRepository;
import com.watch.switme.repository.UserDataExtraRepository;
import com.watch.switme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MyPageService {
    private final UserRepository userRepository;
    private final UserDataExtraRepository userDataExtraRepository;
    private final StudyRepository studyRepository;
    private final TimerRepository timerRepository;
}
