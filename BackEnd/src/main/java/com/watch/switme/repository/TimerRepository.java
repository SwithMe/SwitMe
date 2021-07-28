package com.watch.switme.repository;

import com.watch.switme.domain.Timer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TimerRepository extends JpaRepository<Timer, Long> {

//        Optional<Timer> findById(Long id);
}
