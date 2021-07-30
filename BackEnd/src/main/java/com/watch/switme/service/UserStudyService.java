package com.watch.switme.service;

import com.watch.switme.domain.User;
import com.watch.switme.domain.UserDataExtra;
import com.watch.switme.domain.UserStudy;
import com.watch.switme.domain.UserYesOrNo;
import com.watch.switme.dto.MemberResponseDto;
import com.watch.switme.repository.UserDataExtraRepository;
import com.watch.switme.repository.UserRepository;
import com.watch.switme.repository.UserStudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserStudyService {
    private final UserRepository userRepository;
    private final UserStudyRepository userStudyRepository;
    private final UserDataExtraRepository userDataExtraRepository;

    @Transactional
    public List<MemberResponseDto> getMemberList(Long study_idx){
        List<UserStudy> userStudyList = userStudyRepository.findByStudyIdx(study_idx);
        List<MemberResponseDto> memberResponseDtoList = new ArrayList<>();

        for(UserStudy userStudy: userStudyList){
            if(userStudy.getAmLeader() == UserYesOrNo.Y){
                continue;
            }

            Long user_idx = userStudy.getUser().getUser_idx();
            User user = userRepository.findFirstByUserIdx(user_idx);
            UserDataExtra userDataExtra = userDataExtraRepository.findFirstByUserIdx(user_idx);

            String user_image;
            if(userDataExtra == null){
                user_image = null;
            } else{
                user_image = userDataExtra.getSelfImage();
            }

            MemberResponseDto memberResponseDto = MemberResponseDto.builder()
                    .user_idx(user_idx)
                    .user_name(user.getRealname())
                    .user_image(user_image)
                    .user_manner(user.getManner_temperature())
                    .user_warning(userStudy.getWarning())
                    .build();

            memberResponseDtoList.add(memberResponseDto);
        }

        return memberResponseDtoList;
    }

    @Transactional
    public void updateWarning(Long study_idx, Long user_idx) throws Exception {
        UserStudy userStudy = userStudyRepository.findByUserAndStudy(study_idx, user_idx);
        int new_warning = userStudy.getWarning().intValue() + 1;
        userStudy.updateWarning(new_warning);
    }
}
