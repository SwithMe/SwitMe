package com.watch.switme.service;

import com.watch.switme.domain.Study;
import com.watch.switme.domain.User;
import com.watch.switme.domain.UserRole;
import com.watch.switme.domain.UserYesOrNo;
import com.watch.switme.dto.SignUpDTO;
import com.watch.switme.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class StudyService {

    @Autowired
    private final StudyRepository studyRepository;

    /*
    @Transactional
    public User studyBuild(final SignUpDTO signUpDTO) {
        //먼저 객체를 만들고,
        final User user = User.builder()
                .email(signUpDTO.getEmail())
                .pw(passwordEncoder.encode(signUpDTO.getPw()))
                .role(UserRole.ROLE_USER)
                .manner_temperature(70)
                .UserAgree(UserYesOrNo.Y)
                .realname(signUpDTO.getRealname())
                .isEnable(true)
                .build();
        //그다음에 추가해주세요.
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



















}
