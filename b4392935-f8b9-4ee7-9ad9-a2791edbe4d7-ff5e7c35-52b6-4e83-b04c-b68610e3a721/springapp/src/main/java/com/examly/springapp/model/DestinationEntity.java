package com.examly.springapp.model;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "destinations")
public class DestinationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "destination", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ActivityEntity> activities;


    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    private String country;

    @Column(length = 50)
    private String region;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "time_zone", length = 50)
    private String timeZone;

    @Column(name = "best_time_to_visit", length = 100)
    private String bestTimeToVisit;

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

    public List<ActivityEntity> getActivities() {return activities;}
    public void setActivities(List<ActivityEntity> activities) {this.activities = activities;}

}
