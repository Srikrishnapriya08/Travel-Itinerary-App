// public class ItineraryRepository {
    
// }
package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.ItineraryEvent;

import java.util.List;
@Repository

public interface ItineraryRepository extends JpaRepository<ItineraryEvent, Long> {
    List<ItineraryEvent> findByTripName(String tripName);
    List<ItineraryEvent> findByUserId(Long userId);
    List<ItineraryEvent> findByUserUsername(String username);
}

