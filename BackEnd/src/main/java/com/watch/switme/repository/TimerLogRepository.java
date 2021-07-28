
package com.watch.switme.repository;


import com.watch.switme.domain.TimerLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimerLogRepository extends JpaRepository<TimerLog, Long> {
}
