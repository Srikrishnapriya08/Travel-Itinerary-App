package com.examly.springapp.model;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDateTime;

@Entity
@Table(name = "activities")
public class ActivityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destination_id", nullable = true)
    private DestinationEntity destination;


    @Column(nullable = false, length = 100)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Category category;

    private Integer duration; // in minutes

    @Column(precision = 8, scale = 2)
    private Double cost;

    @Column(precision = 3, scale = 2)
    private Double rating;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate = LocalDateTime.now();


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public DestinationEntity getDestination() {
    return destination;}

    public void setDestination(DestinationEntity destination) {
    this.destination = destination;}
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public Integer getDuration() { return duration; }
    public void setDuration(Integer duration) { this.duration = duration; }

    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }

    public enum Category {
        SIGHTSEEING,
        ADVENTURE,
        CULTURAL,
        ENTERTAINMENT,
        DINING,
        SHOPPING,
        NATURE,
        HISTORICAL
    }
}
