package com.watch.switme.repository;

import com.watch.switme.domain.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
    Study findFirstByStudyIdx(Long study_idx);
}
