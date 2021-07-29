package com.watch.switme.repository;

import com.watch.switme.domain.Timer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TimerRepository extends JpaRepository<Timer, Long> {
    List<Timer> findByUserIdx(Long user_idx);
}
