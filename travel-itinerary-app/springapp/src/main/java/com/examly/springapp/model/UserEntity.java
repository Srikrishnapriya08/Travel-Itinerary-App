// // package com.examly.springapp.model;

// // import javax.persistence.*;

// // import com.fasterxml.jackson.annotation.JsonIgnore;

// // import java.time.LocalDate;
// // import java.util.List;

// // @Entity
// // @Table(name = "users")
// // public class UserEntity {

// //     @Id
// //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// //     private Long id;
// //     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
// //     @JsonIgnore
// //     private List<ItineraryEvent> itineraries;


// //     @Column(unique = true, nullable = false, length = 50)
// //     private String username;

// //     @Column(unique = true, nullable = false, length = 100)
// //     private String email;

// //     @Column(nullable = false, length = 255)
// //     private String passwordHash;

// //     @Enumerated(EnumType.STRING)
// //     @Column(nullable = false, length = 20)
// //     private Role role;

// //     @Column(nullable = false, length = 50)
// //     private String firstName;

// //     @Column(nullable = false, length = 50)
// //     private String lastName;

// //     @Column(length = 15)
// //     private String phoneNumber;

// //     private LocalDate dateOfBirth;

// //     private String nationality;

// //     public Long getId() { return id; }
// //     public void setId(Long id) { this.id = id; }

// //     public String getUsername() { return username; }
// //     public void setUsername(String username) { this.username = username; }

// //     public String getEmail() { return email; }
// //     public void setEmail(String email) { this.email = email; }

// //     public String getPasswordHash() { return passwordHash; }
// //     public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }

// //     public Role getRole() { return role; }
// //     public void setRole(Role role) { this.role = role; }

// //     public String getFirstName() { return firstName; }
// //     public void setFirstName(String firstName) { this.firstName = firstName; }

// //     public String getLastName() { return lastName; }
// //     public void setLastName(String lastName) { this.lastName = lastName; }

// //     public String getPhoneNumber() { return phoneNumber; }
// //     public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

// //     public LocalDate getDateOfBirth() { return dateOfBirth; }
// //     public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

// //     public String getNationality() { return nationality; }
// //     public void setNationality(String nationality) { this.nationality = nationality; }

// //     public List<ItineraryEvent> getItineraries() { return itineraries;}
// //     public void setItineraries(List<ItineraryEvent> itineraries) {this.itineraries = itineraries;}


// //     public enum Role {
// //         GUEST,
// //         BASIC_TRAVELER,
// //         PREMIUM_TRAVELER,
// //         TRAVEL_AGENT,
// //         ADMIN
// //     }
// // }
// package com.examly.springapp.model;

// import javax.persistence.*;
// import com.fasterxml.jackson.annotation.JsonIgnore;
// import java.util.List;

// @Entity
// @Table(name = "users")
// public class UserEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private List<ItineraryEvent> itineraries;

//     @Column(unique = true, nullable = false, length = 50)
//     private String username;

//     @Column(unique = true, nullable = false, length = 100)
//     private String email;

//     @Column(nullable = false, length = 255)
//     private String password;

//     @Transient
//     private String confirmPassword; // not stored in DB

//     @Enumerated(EnumType.STRING)
//     @Column(nullable = false, length = 20)
//     private Role role;

//     // Getters and Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getUsername() { return username; }
//     public void setUsername(String username) { this.username = username; }

//     public String getEmail() { return email; }
//     public void setEmail(String email) { this.email = email; }

//     public String getPassword() { return password; }
//     public void setPassword(String password) { this.password = password; }

//     public String getConfirmPassword() { return confirmPassword; }
//     public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }

//     public Role getRole() { return role; }
//     public void setRole(Role role) { this.role = role; }

//     public List<ItineraryEvent> getItineraries() { return itineraries; }
//     public void setItineraries(List<ItineraryEvent> itineraries) { this.itineraries = itineraries; }

//     // public enum Role {
//     //     GUEST,
//     //     BASIC_TRAVELER,
//     //     PREMIUM_TRAVELER,
//     //     TRAVEL_AGENT,
//     //     ADMIN
//     // }
//     public enum Role {
//     ROLE_GUEST,
//     ROLE_BASIC_TRAVELER,
//     ROLE_PREMIUM_TRAVELER,
//     ROLE_TRAVEL_AGENT,
//     ROLE_ADMIN
// }

// }

package com.examly.springapp.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ItineraryEvent> itineraries;

    @Column(unique = true, nullable = false, length = 50)
    private String username;

    @Column(unique = true, nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @Transient
    private String confirmPassword; // not stored in DB

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private Role role;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getConfirmPassword() { return confirmPassword; }
    public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public List<ItineraryEvent> getItineraries() { return itineraries; }
    public void setItineraries(List<ItineraryEvent> itineraries) { this.itineraries = itineraries; }

    public enum Role {
        ROLE_GUEST,
        ROLE_BASIC_TRAVELER,
        ROLE_PREMIUM_TRAVELER,
        ROLE_TRAVEL_AGENT,
        ROLE_ADMIN
    }
}
