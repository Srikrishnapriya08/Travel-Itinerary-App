package com.examly.springapp.dto;

import java.util.List;

public class DestinationDTO {
    private Long id;
    private String name;
    private String country;
    private String region;
    private String description;
    private String timeZone;
    private String bestTimeToVisit;
    // private List<ActivityDTO> activities;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getTimeZone() { return timeZone; }
    public void setTimeZone(String timeZone) { this.timeZone = timeZone; }

    public String getBestTimeToVisit() { return bestTimeToVisit; }
    public void setBestTimeToVisit(String bestTimeToVisit) { this.bestTimeToVisit = bestTimeToVisit; }

    // public List<ActivityDTO> getActivities() { return activities; }
    // public void setActivities(List<ActivityDTO> activities) { this.activities = activities; }
}
