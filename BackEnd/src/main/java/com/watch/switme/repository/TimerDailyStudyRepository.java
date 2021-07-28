package com.watch.switme.repository;

import com.watch.switme.domain.TimerDailyStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimerDailyStudyRepository extends JpaRepository<TimerDailyStudy, Long> {

}
