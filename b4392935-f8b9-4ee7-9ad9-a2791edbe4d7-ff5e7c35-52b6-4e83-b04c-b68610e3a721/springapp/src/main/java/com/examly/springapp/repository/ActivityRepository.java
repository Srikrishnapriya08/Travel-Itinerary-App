package com.examly.springapp.repository;

import com.examly.springapp.model.ActivityEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity, Long> {
    List<ActivityEntity> findByDestinationId(Long destinationId);
}
