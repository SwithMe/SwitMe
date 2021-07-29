
package com.watch.switme.repository;


import com.watch.switme.domain.Timer;
import com.watch.switme.domain.TimerLog;
import com.watch.switme.dto.UserTimerLogResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimerLogRepository extends JpaRepository<TimerLog, Long> {

//    TimerLog findByTimerIdx(Long timer_idx);

    @Query(value = "select new com.watch.switme.dto.UserTimerLogResponseDto(" +
            "l.log_idx, " +
            "l.start_time, " +
            "l.end_time, " +
            "l.duration) " +
            "from Timer_log l inner join l.timer t " +
            "where t.user_idx = ?1 " +
            "order by l.start_time desc limit 20", nativeQuery = true)
    List<UserTimerLogResponseDto> findTop20ByUserIdx(Long user_idx);
}
