// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.model.BookingEntity;
// // // import com.examly.springapp.service.BookingService;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.List;

// // // @RestController
// // // @CrossOrigin(origins = "*")
// // // @RequestMapping("/api/bookings")
// // // public class BookingController {

// // //     private final BookingService bookingService;

// // //     public BookingController(BookingService bookingService) {
// // //         this.bookingService = bookingService;
// // //     }

// // //     @GetMapping
// // //     public List<BookingEntity> getAllBookings() {
// // //         return bookingService.getAllBookings();
// // //     }

// // //     @GetMapping("/{id}")
// // //     public ResponseEntity<BookingEntity> getBookingById(@PathVariable Long id) {
// // //         return bookingService.getBookingById(id)
// // //                 .map(ResponseEntity::ok)
// // //                 .orElse(ResponseEntity.notFound().build());
// // //     }

// // //     @PostMapping
// // //     public BookingEntity createBooking(@RequestBody BookingEntity booking) {
// // //         return bookingService.createBooking(booking);
// // //     }

// // //     @PutMapping("/{id}")
// // //     public ResponseEntity<BookingEntity> updateBooking(
// // //             @PathVariable Long id,
// // //             @RequestBody BookingEntity bookingDetails) {
// // //         try {
// // //             return ResponseEntity.ok(bookingService.updateBooking(id, bookingDetails));
// // //         } catch (RuntimeException e) {
// // //             return ResponseEntity.notFound().build();
// // //         }
// // //     }

// // //     @DeleteMapping("/{id}")
// // //     public String deleteBooking(@PathVariable Long id) {
// // //         bookingService.deleteBooking(id);
// // //         return "Booking deleted successfully";
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.BookingDTO;
// // import com.examly.springapp.service.BookingService;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/bookings")
// // @CrossOrigin(origins = "*")
// // public class BookingController {

// //     private final BookingService bookingService;

// //     public BookingController(BookingService bookingService) {
// //         this.bookingService = bookingService;
// //     }

// //     @GetMapping
// //     public List<BookingDTO> getAllBookings() {
// //         return bookingService.getAllBookings();
// //     }

// //     @GetMapping("/{id}")
// //     public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
// //         return bookingService.getBookingById(id)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     public BookingDTO createBooking(@RequestBody BookingDTO dto) {
// //         return bookingService.createBooking(dto);
// //     }

// //     @PutMapping("/{id}")
// //     public ResponseEntity<BookingDTO> updateBooking(@PathVariable Long id,
// //                                                     @RequestBody BookingDTO dto) {
// //         try {
// //             return ResponseEntity.ok(bookingService.updateBooking(id, dto));
// //         } catch (RuntimeException e) {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteBooking(@PathVariable Long id) {
// //         bookingService.deleteBooking(id);
// //         return "Booking deleted successfully";
// //     }
// // }
// package com.examly.springapp.controller;

// import com.examly.springapp.dto.BookingDTO;
// import com.examly.springapp.service.BookingService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.access.prepost.PreAuthorize;

// import java.util.List;

// @RestController
// @RequestMapping("/api/bookings")
// @CrossOrigin(origins = "*")
// public class BookingController {

//     private final BookingService bookingService;

//     public BookingController(BookingService bookingService) {
//         this.bookingService = bookingService;
//     }

//     @GetMapping
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public List<BookingDTO> getAllBookings() {
//         return bookingService.getAllBookings();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
//         return bookingService.getBookingById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasAnyRole('BASIC_TRAVELER','PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public BookingDTO createBooking(@RequestBody BookingDTO dto) {
//         return bookingService.createBooking(dto);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasAnyRole('PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<BookingDTO> updateBooking(@PathVariable Long id,
//                                                     @RequestBody BookingDTO dto) {
//         try {
//             return ResponseEntity.ok(bookingService.updateBooking(id, dto));
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasAnyRole('TRAVEL_AGENT','ADMIN')")
//     public String deleteBooking(@PathVariable Long id) {
//         bookingService.deleteBooking(id);
//         return "Booking deleted successfully";
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.BookingDTO;
import com.examly.springapp.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public List<BookingDTO> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_BASIC_TRAVELER','ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public BookingDTO createBooking(@RequestBody BookingDTO dto) {
        return bookingService.createBooking(dto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<BookingDTO> updateBooking(@PathVariable Long id,
                                                    @RequestBody BookingDTO dto) {
        try {
            return ResponseEntity.ok(bookingService.updateBooking(id, dto));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public String deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return "Booking deleted successfully";
    }
}
