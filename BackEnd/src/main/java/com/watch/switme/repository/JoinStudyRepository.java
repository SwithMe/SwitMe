package com.watch.switme.repository;

import com.watch.switme.domain.UserStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinStudyRepository extends JpaRepository<UserStudy, Long> {


}
