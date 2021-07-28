package com.watch.switme.repository;

import com.watch.switme.domain.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
    List<Study> findByStudyIdx(int study_idx);
}
