package com.examly.springapp.repository;

import com.examly.springapp.model.ExpenseEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    List<ExpenseEntity> findByItineraryId(Long itineraryId);
}
