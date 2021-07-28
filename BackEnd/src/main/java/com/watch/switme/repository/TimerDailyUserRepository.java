package com.watch.switme.repository;

import com.watch.switme.domain.Timer;
import com.watch.switme.domain.TimerDailyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface TimerDailyUserRepository extends JpaRepository<TimerDailyUser,Long>{

    TimerDailyUser findByUserIdxAndDateBetween(Long user_idx, Date start, Date end);
}
