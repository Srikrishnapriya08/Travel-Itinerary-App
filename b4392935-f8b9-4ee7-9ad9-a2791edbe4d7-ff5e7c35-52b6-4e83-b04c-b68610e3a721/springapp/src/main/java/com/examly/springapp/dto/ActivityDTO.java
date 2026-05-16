package com.examly.springapp.dto;

import java.time.LocalDateTime;

public class ActivityDTO {
    private Long id;
    private String name;
    private String description;
    private String category;
    private Integer duration;
    private Double cost;
    private Double rating;
    private LocalDateTime createdDate;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Integer getDuration() { return duration; }
    public void setDuration(Integer duration) { this.duration = duration; }

    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }
}
