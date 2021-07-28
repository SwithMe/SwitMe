package com.watch.switme.repository;

import com.watch.switme.domain.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
  
    @Query(value = "select s from Study_main s where s.study_idx = ?1", nativeQuery = true)
    Study findFirstByStudyIdx(Long study_idx);

}
