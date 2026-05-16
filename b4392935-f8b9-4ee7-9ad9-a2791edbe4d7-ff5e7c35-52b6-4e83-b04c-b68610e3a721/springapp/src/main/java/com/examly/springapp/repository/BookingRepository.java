package com.examly.springapp.repository;

import com.examly.springapp.model.BookingEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<BookingEntity, Long> {
    List<BookingEntity> findByItineraryId(Long itineraryId);
}
