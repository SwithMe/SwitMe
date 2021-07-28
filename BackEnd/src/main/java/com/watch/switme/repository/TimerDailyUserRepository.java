package com.watch.switme.repository;

import com.watch.switme.domain.TimerDailyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimerDailyUserRepository extends JpaRepository<TimerDailyUser,Long>{
}
