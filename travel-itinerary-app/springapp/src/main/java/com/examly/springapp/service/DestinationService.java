// package com.examly.springapp.service;

// import com.examly.springapp.model.DestinationEntity;
// import com.examly.springapp.repository.DestinationRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class DestinationService {

//     private final DestinationRepository destinationRepository;

//     public DestinationService(DestinationRepository destinationRepository) {
//         this.destinationRepository = destinationRepository;
//     }

//     public List<DestinationEntity> getAllDestinations() {
//         return destinationRepository.findAll();
//     }

//     public Optional<DestinationEntity> getDestinationById(Long id) {
//         return destinationRepository.findById(id);
//     }

//     public DestinationEntity createDestination(DestinationEntity destination) {
//         return destinationRepository.save(destination);
//     }

//     public DestinationEntity updateDestination(Long id, DestinationEntity updatedDestination) {
//         return destinationRepository.findById(id).map(destination -> {
//             destination.setName(updatedDestination.getName());
//             destination.setCountry(updatedDestination.getCountry());
//             destination.setRegion(updatedDestination.getRegion());
//             destination.setDescription(updatedDestination.getDescription());
//             destination.setTimeZone(updatedDestination.getTimeZone());
//             destination.setBestTimeToVisit(updatedDestination.getBestTimeToVisit());
//             return destinationRepository.save(destination);
//         }).orElseThrow(() -> new RuntimeException("Destination not found with id " + id));
//     }

//     public void deleteDestination(Long id) {
//         destinationRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.DestinationDTO;
import com.examly.springapp.model.DestinationEntity;
import com.examly.springapp.repository.DestinationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    private DestinationDTO toDTO(DestinationEntity dest) {
        DestinationDTO dto = new DestinationDTO();
        dto.setId(dest.getId());
        dto.setName(dest.getName());
        dto.setCountry(dest.getCountry());
        dto.setRegion(dest.getRegion());
        dto.setDescription(dest.getDescription());
        dto.setTimeZone(dest.getTimeZone());
        dto.setBestTimeToVisit(dest.getBestTimeToVisit());
        return dto;
    }

    private DestinationEntity toEntity(DestinationDTO dto) {
        DestinationEntity dest = new DestinationEntity();
        dest.setId(dto.getId());
        dest.setName(dto.getName());
        dest.setCountry(dto.getCountry());
        dest.setRegion(dto.getRegion());
        dest.setDescription(dto.getDescription());
        dest.setTimeZone(dto.getTimeZone());
        dest.setBestTimeToVisit(dto.getBestTimeToVisit());
        return dest;
    }

    public List<DestinationDTO> getAllDestinations() {
        return destinationRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<DestinationDTO> getDestinationById(Long id) {
        return destinationRepository.findById(id).map(this::toDTO);
    }

    public DestinationDTO createDestination(DestinationDTO dto) {
        return toDTO(destinationRepository.save(toEntity(dto)));
    }

    public DestinationDTO updateDestination(Long id, DestinationDTO dto) {
        return destinationRepository.findById(id)
                .map(dest -> {
                    dest.setName(dto.getName());
                    dest.setCountry(dto.getCountry());
                    dest.setRegion(dto.getRegion());
                    dest.setDescription(dto.getDescription());
                    dest.setTimeZone(dto.getTimeZone());
                    dest.setBestTimeToVisit(dto.getBestTimeToVisit());
                    return toDTO(destinationRepository.save(dest));
                }).orElseThrow(() -> new RuntimeException("Destination not found with id " + id));
    }

    public void deleteDestination(Long id) {
        destinationRepository.deleteById(id);
    }
}
