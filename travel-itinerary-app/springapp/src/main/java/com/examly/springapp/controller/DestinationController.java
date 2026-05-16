// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.model.DestinationEntity;
// // // import com.examly.springapp.service.DestinationService;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.List;

// // // @RestController
// // // @RequestMapping("/api/destinations")
// // // public class DestinationController {

// // //     private final DestinationService destinationService;

// // //     public DestinationController(DestinationService destinationService) {
// // //         this.destinationService = destinationService;
// // //     }

// // //     @GetMapping
// // //     public List<DestinationEntity> getAllDestinations() {
// // //         return destinationService.getAllDestinations();
// // //     }

// // //     @GetMapping("/{id}")
// // //     public ResponseEntity<DestinationEntity> getDestinationById(@PathVariable Long id) {
// // //         return destinationService.getDestinationById(id)
// // //                 .map(ResponseEntity::ok)
// // //                 .orElse(ResponseEntity.notFound().build());
// // //     }

// // //     @PostMapping
// // //     public DestinationEntity createDestination(@RequestBody DestinationEntity destination) {
// // //         return destinationService.createDestination(destination);
// // //     }

// // //     @PutMapping("/{id}")
// // //     public ResponseEntity<DestinationEntity> updateDestination(@PathVariable Long id, @RequestBody DestinationEntity updatedDestination) {
// // //         try {
// // //             return ResponseEntity.ok(destinationService.updateDestination(id, updatedDestination));
// // //         } catch (RuntimeException e) {
// // //             return ResponseEntity.notFound().build();
// // //         }
// // //     }

// // //     @DeleteMapping("/{id}")
// // //     public String deleteDestination(@PathVariable Long id) {
// // //         destinationService.deleteDestination(id);
// // //         return "Destination deleted successfully";
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.DestinationDTO;
// // import com.examly.springapp.service.DestinationService;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/destinations")
// // @CrossOrigin(origins = "*")
// // public class DestinationController {

// //     private final DestinationService destinationService;

// //     public DestinationController(DestinationService destinationService) {
// //         this.destinationService = destinationService;
// //     }

// //     @GetMapping
// //     public List<DestinationDTO> getAllDestinations() {
// //         return destinationService.getAllDestinations();
// //     }

// //     @GetMapping("/{id}")
// //     public ResponseEntity<DestinationDTO> getDestinationById(@PathVariable Long id) {
// //         return destinationService.getDestinationById(id)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     public DestinationDTO createDestination(@RequestBody DestinationDTO dto) {
// //         return destinationService.createDestination(dto);
// //     }

// //     @PutMapping("/{id}")
// //     public ResponseEntity<DestinationDTO> updateDestination(@PathVariable Long id,
// //                                                             @RequestBody DestinationDTO dto) {
// //         try {
// //             return ResponseEntity.ok(destinationService.updateDestination(id, dto));
// //         } catch (RuntimeException e) {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteDestination(@PathVariable Long id) {
// //         destinationService.deleteDestination(id);
// //         return "Destination deleted successfully";
// //     }
// // }
// package com.examly.springapp.controller;

// import com.examly.springapp.dto.DestinationDTO;
// import com.examly.springapp.service.DestinationService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.access.prepost.PreAuthorize;

// import java.util.List;

// @RestController
// @RequestMapping("/api/destinations")
// @CrossOrigin(origins = "*")
// public class DestinationController {

//     private final DestinationService destinationService;

//     public DestinationController(DestinationService destinationService) {
//         this.destinationService = destinationService;
//     }

//     @GetMapping
//     @PreAuthorize("hasAnyRole('GUEST','BASIC_TRAVELER','PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public List<DestinationDTO> getAllDestinations() {
//         return destinationService.getAllDestinations();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<DestinationDTO> getDestinationById(@PathVariable Long id) {
//         return destinationService.getDestinationById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasAnyRole('TRAVEL_AGENT','ADMIN')")
//     public DestinationDTO createDestination(@RequestBody DestinationDTO dto) {
//         return destinationService.createDestination(dto);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasAnyRole('TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<DestinationDTO> updateDestination(@PathVariable Long id,
//                                                             @RequestBody DestinationDTO dto) {
//         try {
//             return ResponseEntity.ok(destinationService.updateDestination(id, dto));
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasRole('ADMIN')")
//     public String deleteDestination(@PathVariable Long id) {
//         destinationService.deleteDestination(id);
//         return "Destination deleted successfully";
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.DestinationDTO;
import com.examly.springapp.service.DestinationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "*")
public class DestinationController {

    private final DestinationService destinationService;

    public DestinationController(DestinationService destinationService) {
        this.destinationService = destinationService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_GUEST','ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public List<DestinationDTO> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<DestinationDTO> getDestinationById(@PathVariable Long id) {
        return destinationService.getDestinationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public DestinationDTO createDestination(@RequestBody DestinationDTO dto) {
        return destinationService.createDestination(dto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<DestinationDTO> updateDestination(@PathVariable Long id,
                                                            @RequestBody DestinationDTO dto) {
        try {
            return ResponseEntity.ok(destinationService.updateDestination(id, dto));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String deleteDestination(@PathVariable Long id) {
        destinationService.deleteDestination(id);
        return "Destination deleted successfully";
    }
}
