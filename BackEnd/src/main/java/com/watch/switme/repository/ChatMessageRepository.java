package com.watch.switme.repository;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.dto.MessageListResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    @Query(value = "select new com.watch.switme.dto.MessageListResponseDto(m.room_idx, m.sender_idx, m.message, m.time) from ChatMessage m", nativeQuery = true)
    List<MessageListResponseDto> findByRoom_RoomIdx(Long room_idx);

    ChatMessage findFirstByRoom_RoomIdxOrderByTimeDesc(Long room_idx);

    long countByCheckEquals(int num);
}
