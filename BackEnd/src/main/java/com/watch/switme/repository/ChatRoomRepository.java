package com.watch.switme.repository;

import com.watch.switme.domain.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
    @Query(value = "select * from chat_room c where c.inquirer_idx = ?1 ", nativeQuery = true)
    List<ChatRoom> findByInquirer_UserIdx(Long inquirer_idx);

    ChatRoom findFirstByRoomIdx(Long room_idx);
}
