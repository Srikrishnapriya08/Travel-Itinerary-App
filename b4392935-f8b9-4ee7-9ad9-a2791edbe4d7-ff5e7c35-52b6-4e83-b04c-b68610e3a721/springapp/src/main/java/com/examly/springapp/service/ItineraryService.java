// // public class ItineraryService {
    
// // }
// package com.examly.springapp.service;

// import com.examly.springapp.model.ItineraryEvent;
// import com.examly.springapp.model.UserEntity;
// import com.examly.springapp.repository.ItineraryRepository;
// import com.examly.springapp.repository.UserRepository;

// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class ItineraryService {

//     private final ItineraryRepository itineraryRepository;
//     private final UserRepository userRepository;

//     public ItineraryService(ItineraryRepository itineraryRepository, UserRepository userRepository) {
//         this.itineraryRepository = itineraryRepository;
//         this.userRepository = userRepository;
//     }

//     public ItineraryEvent addItinerary(ItineraryEvent event) {
//         return itineraryRepository.save(event);
//     }

//     public List<ItineraryEvent> getAllItineraries() {
//         return itineraryRepository.findAll();
//     }

//     public Optional<ItineraryEvent> getItineraryById(Long id) {
//         return itineraryRepository.findById(id);
//     }

//     public ItineraryEvent createItinerary(ItineraryEvent itinerary, Long userId) {
//         UserEntity user = userRepository.findById(userId)
//                 .orElseThrow(() -> new RuntimeException("User not found with id " + userId));
//         itinerary.setUser(user);
//         return itineraryRepository.save(itinerary);
//     }

//     public List<ItineraryEvent> getItineraryByTripName(String tripName) {
//         return itineraryRepository.findByTripName(tripName);
//     }

//     public ItineraryEvent updateItinerary(Long id, ItineraryEvent updatedEvent) {
//         return itineraryRepository.findById(id)
//                 .map(event -> {
//                     event.setTripName(updatedEvent.getTripName());
//                     event.setDescription(updatedEvent.getDescription());
//                     event.setDestination(updatedEvent.getDestination());
//                     event.setStartDate(updatedEvent.getStartDate());
//                     event.setEndDate(updatedEvent.getEndDate());
//                     event.setBudget(updatedEvent.getBudget());
//                     return itineraryRepository.save(event);
//                 }).orElseThrow(() -> new RuntimeException("Itinerary not found"));
//     }

//     public void deleteItinerary(Long id) {
//         itineraryRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.ItineraryDTO;
import com.examly.springapp.model.ItineraryEvent;
import com.examly.springapp.model.UserEntity;
import com.examly.springapp.repository.ItineraryRepository;
import com.examly.springapp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItineraryService {

    private final ItineraryRepository itineraryRepository;
    private final UserRepository userRepository;

    public ItineraryService(ItineraryRepository itineraryRepository, UserRepository userRepository) {
        this.itineraryRepository = itineraryRepository;
        this.userRepository = userRepository;
    }

    private ItineraryDTO toDTO(ItineraryEvent event) {
        ItineraryDTO dto = new ItineraryDTO();
        dto.setId(event.getId());
        dto.setTripName(event.getTripName());
        dto.setDescription(event.getDescription());
        dto.setDestination(event.getDestination());
        dto.setStartDate(event.getStartDate());
        dto.setEndDate(event.getEndDate());
        dto.setBudget(event.getBudget());
        return dto;
    }

    private ItineraryEvent toEntity(ItineraryDTO dto) {
        ItineraryEvent event = new ItineraryEvent();
        event.setTripName(dto.getTripName());
        event.setDescription(dto.getDescription());
        event.setDestination(dto.getDestination());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setBudget(dto.getBudget());
        return event;
    }

    public List<ItineraryDTO> getAllItineraries() {
        return itineraryRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<ItineraryDTO> getItineraryById(Long id) {
        return itineraryRepository.findById(id).map(this::toDTO);
    }

    public ItineraryDTO createItinerary(ItineraryDTO dto, Long userId) {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id " + userId));
        ItineraryEvent event = toEntity(dto);
        event.setUser(user);
        return toDTO(itineraryRepository.save(event));
    }

    public ItineraryDTO updateItinerary(Long id, ItineraryDTO dto) {
        return itineraryRepository.findById(id)
                .map(event -> {
                    event.setTripName(dto.getTripName());
                    event.setDescription(dto.getDescription());
                    event.setDestination(dto.getDestination());
                    event.setStartDate(dto.getStartDate());
                    event.setEndDate(dto.getEndDate());
                    event.setBudget(dto.getBudget());
                    return toDTO(itineraryRepository.save(event));
                }).orElseThrow(() -> new RuntimeException("Itinerary not found with id " + id));
    }

    public void deleteItinerary(Long id) {
        itineraryRepository.deleteById(id);
    }
}