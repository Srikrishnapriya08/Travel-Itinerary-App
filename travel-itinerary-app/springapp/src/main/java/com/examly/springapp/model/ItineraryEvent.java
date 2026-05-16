// public class ItineraryEvent {
    
// }
package com.examly.springapp.model;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "itineraries")
public class ItineraryEvent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = true)
    private UserEntity user;

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<BookingEntity> bookings;

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ExpenseEntity> expenses;

    @Column(nullable=false)
    private String tripName;

    private String description;

    private String destination;

    private LocalDate startDate;

    private LocalDate endDate;

    private Double budget;

    public ItineraryEvent() {}

    public ItineraryEvent(String tripName, String description, String destination,
                          LocalDate startDate, LocalDate endDate, Double budget) {
        this.tripName = tripName;
        this.description = description;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.budget = budget;
    }

    public Long getId() { return id; }

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


    public UserEntity getUser() { return user; }
    public void setUser(UserEntity user) { this.user = user; }

    public List<BookingEntity> getBookings() { return bookings;}
    public void setBookings(List<BookingEntity> bookings) { this.bookings = bookings;}

    public List<ExpenseEntity> getExpenses() {return expenses;}
    public void setExpenses(List<ExpenseEntity> expenses) {this.expenses = expenses;}

    // public void setId(Long id2) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'setId'");
    // }

}
