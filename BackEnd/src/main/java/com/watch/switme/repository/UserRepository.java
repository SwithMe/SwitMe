package com.watch.switme.repository;

import com.watch.switme.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);


    @Query(value = "select u from User_data u where u.user_idx = ?1", nativeQuery = true)
    User findFirstByUserIdx(Long user_idx);

}
