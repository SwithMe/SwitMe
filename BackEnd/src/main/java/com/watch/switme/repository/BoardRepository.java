package com.watch.switme.repository;

import com.watch.switme.dto.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}