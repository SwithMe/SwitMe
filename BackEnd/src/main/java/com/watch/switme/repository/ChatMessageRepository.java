package com.watch.switme.repository;

import com.watch.switme.domain.ChatMessage;
import com.watch.switme.dto.ChatMessageInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    List<ChatMessageInterface> findByRoom_RoomIdx(Long room_idx);

    ChatMessage findFirstByRoom_RoomIdxOrderByTimeDesc(Long room_idx);

    long countByCheckEquals(int num);
}
