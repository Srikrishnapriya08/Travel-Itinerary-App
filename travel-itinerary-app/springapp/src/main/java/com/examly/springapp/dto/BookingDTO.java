// package com.examly.springapp.dto;

// import java.time.LocalDate;
// import java.time.LocalDateTime;

// public class BookingDTO {
//     private Long id;
//     private String bookingType;
//     private LocalDateTime bookingDate;
//     private LocalDate serviceDate;
//     private Double cost;
//     private String status;

//     // Getters and Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getBookingType() { return bookingType; }
//     public void setBookingType(String bookingType) { this.bookingType = bookingType; }

//     public LocalDateTime getBookingDate() { return bookingDate; }
//     public void setBookingDate(LocalDateTime bookingDate) { this.bookingDate = bookingDate; }

//     public LocalDate getServiceDate() { return serviceDate; }
//     public void setServiceDate(LocalDate serviceDate) { this.serviceDate = serviceDate; }

//     public Double getCost() { return cost; }
//     public void setCost(Double cost) { this.cost = cost; }

//     public String getStatus() { return status; }
//     public void setStatus(String status) { this.status = status; }
// }
package com.examly.springapp.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class BookingDTO {
    private Long id;
    private String bookingType;
    private LocalDateTime bookingDate;
    private LocalDate serviceDate;
    private Double cost;
    private String status;
    private Long itineraryId;  // added

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBookingType() { return bookingType; }
    public void setBookingType(String bookingType) { this.bookingType = bookingType; }

    public LocalDateTime getBookingDate() { return bookingDate; }
    public void setBookingDate(LocalDateTime bookingDate) { this.bookingDate = bookingDate; }

    public LocalDate getServiceDate() { return serviceDate; }
    public void setServiceDate(LocalDate serviceDate) { this.serviceDate = serviceDate; }

    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Long getItineraryId() { return itineraryId; }
    public void setItineraryId(Long itineraryId) { this.itineraryId = itineraryId; }
}
