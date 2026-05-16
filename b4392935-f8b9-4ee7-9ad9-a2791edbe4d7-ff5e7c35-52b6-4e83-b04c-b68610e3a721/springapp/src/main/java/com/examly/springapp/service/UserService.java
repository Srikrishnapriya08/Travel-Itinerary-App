// // package com.examly.springapp.service;

// // import com.examly.springapp.model.UserEntity;
// // import com.examly.springapp.repository.UserRepository;
// // import org.springframework.stereotype.Service;

// // import java.util.List;
// // import java.util.Optional;

// // @Service
// // public class UserService {

// //     private final UserRepository userRepository;

// //     public UserService(UserRepository userRepository) {
// //         this.userRepository = userRepository;
// //     }

// //     public List<UserEntity> getAllUsers() {
// //         return userRepository.findAll();
// //     }

// //     public Optional<UserEntity> getUserById(Long id) {
// //         return userRepository.findById(id);
// //     }

// //     public UserEntity createUser(UserEntity user) {
// //         return userRepository.save(user);
// //     }

// //     public UserEntity updateUser(Long id, UserEntity updatedUser) {
// //         return userRepository.findById(id).map(user -> {
// //             user.setUsername(updatedUser.getUsername());
// //             user.setEmail(updatedUser.getEmail());
// //             user.setPasswordHash(updatedUser.getPasswordHash());
// //             user.setRole(updatedUser.getRole());
// //             user.setFirstName(updatedUser.getFirstName());
// //             user.setLastName(updatedUser.getLastName());
// //             user.setPhoneNumber(updatedUser.getPhoneNumber());
// //             user.setDateOfBirth(updatedUser.getDateOfBirth());
// //             user.setNationality(updatedUser.getNationality());
// //             return userRepository.save(user);
// //         }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
// //     }

// //     public void deleteUser(Long id) {
// //         userRepository.deleteById(id);
// //     }
// // }
// package com.examly.springapp.service;

// import com.examly.springapp.model.UserEntity;
// import com.examly.springapp.repository.UserRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class UserService {

//     private final UserRepository userRepository;

//     public UserService(UserRepository userRepository) {
//         this.userRepository = userRepository;
//     }

//     // Get all users
//     public List<UserEntity> getAllUsers() {
//         return userRepository.findAll();
//     }

//     // Get user by ID
//     public Optional<UserEntity> getUserById(Long id) {
//         return userRepository.findById(id);
//     }

//     // Create user (registration)
//     public UserEntity createUser(UserEntity user) {
//         return userRepository.save(user);
//     }

//     // Update user
//     public UserEntity updateUser(Long id, UserEntity updatedUser) {
//         return userRepository.findById(id).map(user -> {
//             user.setUsername(updatedUser.getUsername());
//             user.setEmail(updatedUser.getEmail());
//             user.setPasswordHash(updatedUser.getPasswordHash());
//             user.setRole(updatedUser.getRole());
//             return userRepository.save(user);
//         }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
//     }

//     // Delete user
//     public void deleteUser(Long id) {
//         userRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.UserDTO;
import com.examly.springapp.model.UserEntity;
import com.examly.springapp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserDTO toDTO(UserEntity user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword());
        dto.setConfirmPassword(user.getPassword());
        dto.setRole(user.getRole());
        return dto;
    }

    private UserEntity toEntity(UserDTO dto) {
        UserEntity user = new UserEntity();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(dto.getRole());
        return user;
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<UserDTO> getUserById(Long id) {
        return userRepository.findById(id).map(this::toDTO);
    }

    public UserDTO createUser(UserDTO dto) {
        return toDTO(userRepository.save(toEntity(dto)));
    }

    public UserDTO updateUser(Long id, UserDTO dto) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(dto.getUsername());
                    user.setEmail(dto.getEmail());
                    user.setPassword(dto.getPassword());
                    user.setRole(dto.getRole());
                    return toDTO(userRepository.save(user));
                }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
