// package com.examly.springapp.service;

// import com.examly.springapp.model.BookingEntity;
// import com.examly.springapp.repository.BookingRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class BookingService {

//     private final BookingRepository bookingRepository;

//     public BookingService(BookingRepository bookingRepository) {
//         this.bookingRepository = bookingRepository;
//     }

//     public List<BookingEntity> getAllBookings() {
//         return bookingRepository.findAll();
//     }

//     public Optional<BookingEntity> getBookingById(Long id) {
//         return bookingRepository.findById(id);
//     }

//     public BookingEntity createBooking(BookingEntity booking) {
//         return bookingRepository.save(booking);
//     }

//     public BookingEntity updateBooking(Long id, BookingEntity bookingDetails) {
//         return bookingRepository.findById(id)
//                 .map(existing -> {
//                     existing.setItinerary(bookingDetails.getItinerary());
//                     existing.setBookingType(bookingDetails.getBookingType());
//                     existing.setBookingDate(bookingDetails.getBookingDate());
//                     existing.setServiceDate(bookingDetails.getServiceDate());
//                     existing.setCost(bookingDetails.getCost());
//                     existing.setStatus(bookingDetails.getStatus());
//                     return bookingRepository.save(existing);
//                 })
//                 .orElseThrow(() -> new RuntimeException("Booking not found with id " + id));
//     }

//     public void deleteBooking(Long id) {
//         bookingRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.BookingDTO;
import com.examly.springapp.model.BookingEntity;
import com.examly.springapp.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    private BookingDTO toDTO(BookingEntity booking) {
        BookingDTO dto = new BookingDTO();
        dto.setId(booking.getId());
        dto.setBookingType(booking.getBookingType().name());
        dto.setBookingDate(booking.getBookingDate());
        dto.setServiceDate(booking.getServiceDate());
        dto.setCost(booking.getCost());
        dto.setStatus(booking.getStatus().name());
        return dto;
    }

    private BookingEntity toEntity(BookingDTO dto) {
        BookingEntity booking = new BookingEntity();
        booking.setId(dto.getId());
        booking.setBookingType(BookingEntity.BookingType.valueOf(dto.getBookingType()));
        booking.setBookingDate(dto.getBookingDate());
        booking.setServiceDate(dto.getServiceDate());
        booking.setCost(dto.getCost());
        booking.setStatus(BookingEntity.BookingStatus.valueOf(dto.getStatus()));
        return booking;
    }

    public List<BookingDTO> getAllBookings() {
        return bookingRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<BookingDTO> getBookingById(Long id) {
        return bookingRepository.findById(id).map(this::toDTO);
    }

    public BookingDTO createBooking(BookingDTO dto) {
        return toDTO(bookingRepository.save(toEntity(dto)));
    }

    public BookingDTO updateBooking(Long id, BookingDTO dto) {
        return bookingRepository.findById(id)
                .map(existing -> {
                    existing.setBookingType(BookingEntity.BookingType.valueOf(dto.getBookingType()));
                    existing.setBookingDate(dto.getBookingDate());
                    existing.setServiceDate(dto.getServiceDate());
                    existing.setCost(dto.getCost());
                    existing.setStatus(BookingEntity.BookingStatus.valueOf(dto.getStatus()));
                    return toDTO(bookingRepository.save(existing));
                }).orElseThrow(() -> new RuntimeException("Booking not found with id " + id));
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
