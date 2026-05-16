// // // public class ItineraryController {
    
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.model.ItineraryEvent;
// // import com.examly.springapp.service.ItineraryService;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;
// // @RestController
// // @RequestMapping("/api/itinerary")
// // public class ItineraryController {

// //     private final ItineraryService itineraryService;

// //     public ItineraryController(ItineraryService itineraryService) {
// //         this.itineraryService = itineraryService;
// //     }
    


// //     @PostMapping
// //      public ItineraryEvent createItinerary(
// //         @RequestBody ItineraryEvent event,
// //         @RequestParam Long userId) {
// //         return itineraryService.createItinerary(event, userId);
// //     }

// //     @GetMapping
// //     public List<ItineraryEvent> getAllItineraries() {
// //         return itineraryService.getAllItineraries();
// //     }

// //     @GetMapping("/{tripName}")
// //     public List<ItineraryEvent> getItineraryByTripName(@PathVariable String tripName) {
// //         return itineraryService.getItineraryByTripName(tripName);
// //     }

// //     @PutMapping("/{id}")
// //     public ItineraryEvent updateItinerary(@PathVariable Long id, @RequestBody ItineraryEvent updatedEvent) {
// //         return itineraryService.updateItinerary(id, updatedEvent);
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteItinerary(@PathVariable Long id) {
// //         itineraryService.deleteItinerary(id);
// //         return "Itinerary deleted successfully";
// //     }
// // }

// package com.examly.springapp.controller;

// import com.examly.springapp.dto.ItineraryDTO;
// import com.examly.springapp.service.ItineraryService;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/itineraries")
// @CrossOrigin(origins = "*")
// public class ItineraryController {

//     private final ItineraryService itineraryService;

//     public ItineraryController(ItineraryService itineraryService) {
//         this.itineraryService = itineraryService;
//     }

//     @PostMapping
//     public ItineraryDTO createItinerary(@RequestBody ItineraryDTO dto,
//                                         @RequestParam Long userId) {
//         return itineraryService.createItinerary(dto, userId);
//     }

//     @GetMapping
//     public List<ItineraryDTO> getAllItineraries() {
//         return itineraryService.getAllItineraries();
//     }

//     @GetMapping("/{id}")
//     public ItineraryDTO getItineraryById(@PathVariable Long id) {
//         return itineraryService.getItineraryById(id).orElse(null);
//     }

//     @PutMapping("/{id}")
//     public ItineraryDTO updateItinerary(@PathVariable Long id, @RequestBody ItineraryDTO dto) {
//         return itineraryService.updateItinerary(id, dto);
//     }

//     @DeleteMapping("/{id}")
//     public String deleteItinerary(@PathVariable Long id) {
//         itineraryService.deleteItinerary(id);
//         return "Itinerary deleted successfully";
//     }
// }
package com.examly.springapp.controller;

import com.examly.springapp.dto.ItineraryDTO;
import com.examly.springapp.service.ItineraryService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itineraries")
@CrossOrigin(origins = "*")
public class ItineraryController {

    private final ItineraryService itineraryService;
    public ItineraryController(ItineraryService itineraryService) {
        this.itineraryService = itineraryService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER')")
    public ItineraryDTO createItinerary(@RequestBody ItineraryDTO dto, @RequestParam Long userId) {
        return itineraryService.createItinerary(dto, userId);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_TRAVEL_AGENT','ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER')")
    public List<ItineraryDTO> getAllItineraries() {
        return itineraryService.getAllItineraries();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_TRAVEL_AGENT','ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER')")
    public ItineraryDTO getItineraryById(@PathVariable Long id) {
        return itineraryService.getItineraryById(id).orElse(null);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER')")
    public ItineraryDTO updateItinerary(@PathVariable Long id, @RequestBody ItineraryDTO dto) {
        return itineraryService.updateItinerary(id, dto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_ADMIN')")
    public String deleteItinerary(@PathVariable Long id) {
        itineraryService.deleteItinerary(id);
        return "Itinerary deleted successfully";
    }
}
