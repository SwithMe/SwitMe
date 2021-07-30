package com.watch.switme.repository;

import com.watch.switme.domain.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
    @Query(value = "select * from Study_main s where s.study_idx = ?1", nativeQuery = true)
    Study findFirstByStudyIdx(Long study_idx);

    @Query(value="select * from Study_main s", nativeQuery = true)
    List<Study> findAllByStudy_idx(Long study_idx);

    List<Study> findAll();

    @Query(value = "select * from Study_main u where u.title=:title", nativeQuery=true)
    List <Study> findByTitle(@Param("title")String title);

    List<Study> findAllByleader(int leader);

    //public void createStudy(Study study);

    List<Study> findByStudyIdx(int study_idx);

    @Query(value = "select s from Study_main s where s.study_idx = ?1", nativeQuery = true)
    Study findFirstByStudyIdx(Long study_idx);
}
