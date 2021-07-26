package com.watch.switme.service;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.dto.ChatMessageDto;
import com.watch.switme.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ChatMessageService {
    private final ChatMessageRepository chatMessageRepository;

    public void save(ChatMessageDto chatMessageDto){
        chatMessageRepository.save(chatMessageDto.toEntity());
    }
}
