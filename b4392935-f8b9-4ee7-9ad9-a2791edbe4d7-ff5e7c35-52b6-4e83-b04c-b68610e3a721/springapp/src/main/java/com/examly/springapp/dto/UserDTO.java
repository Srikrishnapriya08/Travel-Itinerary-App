// package com.examly.springapp.dto;

// import com.examly.springapp.model.UserEntity.Role;

// public class UserDTO {

//     private Long id;
//     private String username;
//     private String email;
//     private String password;
//     private String confirmPassword;
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
// }


package com.examly.springapp.dto;

import com.examly.springapp.model.UserEntity.Role;

public class UserDTO {

    private Long id;
    private String username;
    private String email;
    private String password;
    private String confirmPassword;
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
}
