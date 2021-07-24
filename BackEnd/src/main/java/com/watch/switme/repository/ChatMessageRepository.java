package com.watch.switme.repository;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.dto.MessageListResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    @Query("select new com.watch.switme.dto.MessageListResponseDto(m.room_idx, m.sender_idx, m.message, m.time) from ChatMessage m")
    List<MessageListResponseDto> findByRoomIdx(Long room_idx);

    ChatMessage findFirstByRoomIdxOrderByTimeDesc(Long room_idx);

    long countByCheckEquals0();
}
