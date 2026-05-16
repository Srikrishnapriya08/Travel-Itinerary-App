// package com.examly.springapp.dto;

// import java.time.LocalDate;
// import java.util.List;

// public class ItineraryDTO {
//     private Long id;
//     private String tripName;
//     private String description;
//     private String destination;
//     private LocalDate startDate;
//     private LocalDate endDate;
//     private Double budget;
//     // private List<BookingDTO> bookings;
//     // private List<ExpenseDTO> expenses;

//     // Getters and Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getTripName() { return tripName; }
//     public void setTripName(String tripName) { this.tripName = tripName; }

//     public String getDescription() { return description; }
//     public void setDescription(String description) { this.description = description; }

//     public String getDestination() { return destination; }
//     public void setDestination(String destination) { this.destination = destination; }

//     public LocalDate getStartDate() { return startDate; }
//     public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

//     public LocalDate getEndDate() { return endDate; }
//     public void setEndDate(LocalDate endDate) { this.endDate = endDate; }

//     public Double getBudget() { return budget; }
//     public void setBudget(Double budget) { this.budget = budget; }

//     // public List<BookingDTO> getBookings() { return bookings; }
//     // public void setBookings(List<BookingDTO> bookings) { this.bookings = bookings; }

//     // public List<ExpenseDTO> getExpenses() { return expenses; }
//     // public void setExpenses(List<ExpenseDTO> expenses) { this.expenses = expenses; }
// }


package com.examly.springapp.dto;

import java.time.LocalDate;

public class ItineraryDTO {
    private Long id;
    private String tripName;
    private String description;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double budget;
    //private String username; // owner username

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTripName() { return tripName; }
    public void setTripName(String tripName) { this.tripName = tripName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public LocalDate getStartDate() { return startDate; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

    public LocalDate getEndDate() { return endDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }

    public Double getBudget() { return budget; }
    public void setBudget(Double budget) { this.budget = budget; }
    

    // public String getUsername() { return username; }
    // public void setUsername(String username) { this.username = username; }
}
