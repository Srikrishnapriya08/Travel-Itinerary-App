// // // // package com.examly.springapp.controller;

// // // // import com.examly.springapp.dto.LoginUser;
// // // // import com.examly.springapp.model.RevokedToken;
// // // // import com.examly.springapp.model.UserEntity;
// // // // import com.examly.springapp.model.UserEntity.Role;
// // // // import com.examly.springapp.repository.RevokedTokenRepository;
// // // // import com.examly.springapp.repository.UserRepository;
// // // // import com.examly.springapp.security.JwtUtil;

// // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // import org.springframework.http.HttpStatus;
// // // // import org.springframework.http.ResponseEntity;
// // // // import org.springframework.security.crypto.password.PasswordEncoder;
// // // // import org.springframework.web.bind.annotation.*;

// // // // import java.util.Map;
// // // // import java.util.Optional;

// // // // @RestController
// // // // @RequestMapping("/auth")
// // // // public class AuthController {

// // // //     @Autowired
// // // //     private JwtUtil jwtUtil;

// // // //     @Autowired
// // // //     private UserRepository userRepository;

// // // //     @Autowired
// // // //     private RevokedTokenRepository revokedTokenRepository;

// // // //     @Autowired
// // // //     private PasswordEncoder passwordEncoder;

// // // //     @PostMapping("/register")
// // // //     public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
// // // //         if (userRepository.findByUsername(user.getUsername()).isPresent()) {
// // // //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
// // // //         }

// // // //         if (userRepository.findByEmail(user.getEmail()).isPresent()) {
// // // //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists!");
// // // //         }

// // // //         user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

// // // //         if (user.getRole() == null) {
// // // //             user.setRole(Role.BASIC_TRAVELER);
// // // //         }

// // // //         userRepository.save(user);
// // // //         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
// // // //     }

// // // //     @PostMapping("/login")
// // // //     public ResponseEntity<?> login(@RequestBody LoginUser loginUser) {
// // // //         String username = loginUser.getUsername("username");
// // // //         String password = loginUser.getPassword("password");

// // // //         Optional<UserEntity> existingUser = userRepository.findByUsername(username);

// // // //         if (existingUser.isPresent() &&
// // // //                 passwordEncoder.matches(password, existingUser.get().getPasswordHash())) {

// // // //             return ResponseEntity.ok(Map.of(
// // // //     "accessToken", jwtUtil.generateToken(
// // // //             existingUser.get().getUsername(),
// // // //             "ROLE_" + existingUser.get().getRole().name()   // <-- prefix added 
// // // //             ),
// // // //     "refreshToken", jwtUtil.generateRefreshToken(existingUser.get().getUsername())
// // // // ));

// // // //         }

// // // //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
// // // //     }

// // // //     @PostMapping("/logout")
// // // //     public ResponseEntity<String> logout(@RequestHeader("Authorization") String token,
// // // //                                          @RequestBody(required = false) Map<String, String> request) {
// // // //         if (token != null && token.startsWith("Bearer ")) {
// // // //             token = token.substring(7);
// // // //             revokedTokenRepository.save(new RevokedToken(token));
// // // //         }

// // // //         if (request != null && request.containsKey("refreshToken")) {
// // // //             revokedTokenRepository.save(new RevokedToken(request.get("refreshToken")));
// // // //         }

// // // //         return ResponseEntity.ok("Logged out successfully.");
// // // //     }

// // // //     @PostMapping("/refresh")
// // // //     public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {
// // // //         String refreshToken = request.get("refreshToken");

// // // //         if (refreshToken == null || jwtUtil.isTokenExpired(refreshToken)) {
// // // //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token.");
// // // //         }

// // // //         String username = jwtUtil.getUsernameFromToken(refreshToken);
// // // //         Optional<UserEntity> userOpt = userRepository.findByUsername(username);

// // // //         if (userOpt.isEmpty()) {
// // // //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
// // // //         }

// // // //         UserEntity user = userOpt.get();

// // // //         return ResponseEntity.ok(Map.of(
// // // //                 "accessToken", jwtUtil.generateToken(user.getUsername(), user.getRole().name())
// // // //         ));
// // // //     }
// // // // }
// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.dto.LoginUser;
// // // import com.examly.springapp.model.RevokedToken;
// // // import com.examly.springapp.model.UserEntity;
// // // import com.examly.springapp.model.UserEntity.Role;
// // // import com.examly.springapp.repository.RevokedTokenRepository;
// // // import com.examly.springapp.repository.UserRepository;
// // // import com.examly.springapp.security.JwtUtil;

// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.http.HttpStatus;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.security.crypto.password.PasswordEncoder;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.Map;
// // // import java.util.Optional;

// // // @RestController
// // // @RequestMapping("/auth")
// // // public class AuthController {

// // //     @Autowired
// // //     private JwtUtil jwtUtil;

// // //     @Autowired
// // //     private UserRepository userRepository;

// // //     @Autowired
// // //     private RevokedTokenRepository revokedTokenRepository;

// // //     @Autowired
// // //     private PasswordEncoder passwordEncoder;

// // //     @PostMapping("/register")
// // //     public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
// // //         if (userRepository.findByUsername(user.getUsername()).isPresent()) {
// // //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
// // //         }

// // //         if (userRepository.findByEmail(user.getEmail()).isPresent()) {
// // //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists!");
// // //         }

// // //         user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

// // //         if (user.getRole() == null) {
// // //             user.setRole(Role.BASIC_TRAVELER);
// // //         }

// // //         userRepository.save(user);
// // //         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
// // //     }

// // //     @PostMapping("/login")
// // //     public ResponseEntity<?> login(@RequestBody LoginUser loginUser) {
// // //         String username = loginUser.getUsername("username");
// // //         String password = loginUser.getPassword("password");

// // //         Optional<UserEntity> existingUser = userRepository.findByUsername(username);

// // //         if (existingUser.isPresent() &&
// // //                 passwordEncoder.matches(password, existingUser.get().getPasswordHash())) {

// // //             // Add "ROLE_" prefix to role name for Spring Security
// // //             String roleWithPrefix = "ROLE_" + existingUser.get().getRole().name();

// // //             return ResponseEntity.ok(Map.of(
// // //                     "accessToken", jwtUtil.generateToken(existingUser.get().getUsername(), roleWithPrefix),
// // //                     "refreshToken", jwtUtil.generateRefreshToken(existingUser.get().getUsername())
// // //             ));
// // //         }

// // //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
// // //     }

// // //     @PostMapping("/logout")
// // //     public ResponseEntity<String> logout(@RequestHeader("Authorization") String token,
// // //                                          @RequestBody(required = false) Map<String, String> request) {
// // //         if (token != null && token.startsWith("Bearer ")) {
// // //             token = token.substring(7);
// // //             revokedTokenRepository.save(new RevokedToken(token));
// // //         }

// // //         if (request != null && request.containsKey("refreshToken")) {
// // //             revokedTokenRepository.save(new RevokedToken(request.get("refreshToken")));
// // //         }

// // //         return ResponseEntity.ok("Logged out successfully.");
// // //     }

// // //     @PostMapping("/refresh")
// // //     public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {
// // //         String refreshToken = request.get("refreshToken");

// // //         if (refreshToken == null || jwtUtil.isTokenExpired(refreshToken)) {
// // //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token.");
// // //         }

// // //         String username = jwtUtil.getUsernameFromToken(refreshToken);
// // //         Optional<UserEntity> userOpt = userRepository.findByUsername(username);

// // //         if (userOpt.isEmpty()) {
// // //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
// // //         }

// // //         UserEntity user = userOpt.get();

// // //         String roleWithPrefix = "ROLE_" + user.getRole().name();

// // //         return ResponseEntity.ok(Map.of(
// // //                 "accessToken", jwtUtil.generateToken(user.getUsername(), roleWithPrefix)
// // //         ));
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.LoginUser;
// // import com.examly.springapp.model.RevokedToken;
// // import com.examly.springapp.model.UserEntity;
// // import com.examly.springapp.model.UserEntity.Role;
// // import com.examly.springapp.repository.RevokedTokenRepository;
// // import com.examly.springapp.repository.UserRepository;
// // import com.examly.springapp.security.JwtUtil;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.Map;
// // import java.util.Optional;

// // @RestController
// // @RequestMapping("/auth")
// // public class AuthController {

// //     @Autowired
// //     private JwtUtil jwtUtil;

// //     @Autowired
// //     private UserRepository userRepository;

// //     @Autowired
// //     private RevokedTokenRepository revokedTokenRepository;

// //     @Autowired
// //     private PasswordEncoder passwordEncoder;

// //     @PostMapping("/register")
// //     public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
// //         if (userRepository.findByUsername(user.getUsername()).isPresent()) {
// //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
// //         }

// //         if (userRepository.findByEmail(user.getEmail()).isPresent()) {
// //             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists!");
// //         }

// //         user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

// //         if (user.getRole() == null) {
// //             user.setRole(Role.BASIC_TRAVELER);
// //         }

// //         userRepository.save(user);
// //         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
// //     }

// //     @PostMapping("/login")
// //     public ResponseEntity<?> login(@RequestBody LoginUser loginUser) {
// //         String username = loginUser.getUsername();
// //         String password = loginUser.getPassword();

// //         Optional<UserEntity> existingUser = userRepository.findByUsername(username);

// //         if (existingUser.isPresent() &&
// //                 passwordEncoder.matches(password, existingUser.get().getPasswordHash())) {

// //             String roleWithPrefix = "ROLE_" + existingUser.get().getRole().name();

// //             return ResponseEntity.ok(Map.of(
// //                     "accessToken", jwtUtil.generateToken(existingUser.get().getUsername(), roleWithPrefix),
// //                     "refreshToken", jwtUtil.generateRefreshToken(existingUser.get().getUsername())
// //             ));
// //         }

// //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
// //     }

// //     @PostMapping("/logout")
// //     public ResponseEntity<String> logout(@RequestHeader("Authorization") String token,
// //                                          @RequestBody(required = false) Map<String, String> request) {
// //         if (token != null && token.startsWith("Bearer ")) {
// //             token = token.substring(7);
// //             revokedTokenRepository.save(new RevokedToken(token));
// //         }

// //         if (request != null && request.containsKey("refreshToken")) {
// //             revokedTokenRepository.save(new RevokedToken(request.get("refreshToken")));
// //         }

// //         return ResponseEntity.ok("Logged out successfully.");
// //     }

// //     @PostMapping("/refresh")
// //     public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {
// //         String refreshToken = request.get("refreshToken");

// //         if (refreshToken == null || jwtUtil.isTokenExpired(refreshToken)) {
// //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token.");
// //         }

// //         String username = jwtUtil.getUsernameFromToken(refreshToken);
// //         Optional<UserEntity> userOpt = userRepository.findByUsername(username);

// //         if (userOpt.isEmpty()) {
// //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
// //         }

// //         UserEntity user = userOpt.get();
// //         String roleWithPrefix = "ROLE_" + user.getRole().name();

// //         return ResponseEntity.ok(Map.of(
// //                 "accessToken", jwtUtil.generateToken(user.getUsername(), roleWithPrefix)
// //         ));
// //     }
// // }
// package com.examly.springapp.controller;

// import com.examly.springapp.dto.UserDTO;
// import com.examly.springapp.dto.LoginUser;
// import com.examly.springapp.model.RevokedToken;
// import com.examly.springapp.model.UserEntity;
// import com.examly.springapp.repository.RevokedTokenRepository;
// import com.examly.springapp.repository.UserRepository;
// import com.examly.springapp.security.JwtUtil;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.*;

// import java.util.Map;
// import java.util.Optional;

// @RestController
// @RequestMapping("/auth")
// @CrossOrigin(origins = "*")
// public class AuthController {

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private RevokedTokenRepository revokedTokenRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     // ---------------- REGISTER ----------------
//     @PostMapping("/register")
//     public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
//         if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
//         }

//         if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists!");
//         }

//         if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords do not match!");
//         }

//         UserEntity user = new UserEntity();
//         user.setUsername(userDTO.getUsername());
//         user.setEmail(userDTO.getEmail());
//         user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

//         // Default role if not provided
//         if (userDTO.getRole() != null) {
//             user.setRole(userDTO.getRole());
//         } else {
//             user.setRole(UserEntity.Role.ROLE_BASIC_TRAVELER);
//         }

//         userRepository.save(user);
//         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
//     }

//     // ---------------- LOGIN ----------------
//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody LoginUser loginUser) {
//         String username = loginUser.getUsername();
//         String password = loginUser.getPassword();

//         Optional<UserEntity> existingUser = userRepository.findByUsername(username);

//         if (existingUser.isPresent() &&
//                 passwordEncoder.matches(password, existingUser.get().getPassword())) {

//             String roleWithPrefix = existingUser.get().getRole().name();

//             return ResponseEntity.ok(Map.of(
//                     "accessToken", jwtUtil.generateToken(existingUser.get().getUsername(), roleWithPrefix),
//                     "refreshToken", jwtUtil.generateRefreshToken(existingUser.get().getUsername())
//             ));
//         }

//         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//     }

//     // ---------------- LOGOUT ----------------
//     @PostMapping("/logout")
//     public ResponseEntity<String> logout(@RequestHeader("Authorization") String token,
//                                          @RequestBody(required = false) Map<String, String> request) {
//         if (token != null && token.startsWith("Bearer ")) {
//             token = token.substring(7);
//             revokedTokenRepository.save(new RevokedToken(token));
//         }

//         if (request != null && request.containsKey("refreshToken")) {
//             revokedTokenRepository.save(new RevokedToken(request.get("refreshToken")));
//         }

//         return ResponseEntity.ok("Logged out successfully.");
//     }

//     // ---------------- REFRESH TOKEN ----------------
//     @PostMapping("/refresh")
//     public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {
//         String refreshToken = request.get("refreshToken");

//         if (refreshToken == null || jwtUtil.isTokenExpired(refreshToken)) {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token.");
//         }

//         String username = jwtUtil.getUsernameFromToken(refreshToken);
//         Optional<UserEntity> userOpt = userRepository.findByUsername(username);

//         if (userOpt.isEmpty()) {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
//         }

//         UserEntity user = userOpt.get();
//         String roleWithPrefix = user.getRole().name();

//         return ResponseEntity.ok(Map.of(
//                 "accessToken", jwtUtil.generateToken(user.getUsername(), roleWithPrefix)
//         ));
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.UserDTO;
import com.examly.springapp.dto.LoginUser;
import com.examly.springapp.model.RevokedToken;
import com.examly.springapp.model.UserEntity;
import com.examly.springapp.repository.RevokedTokenRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RevokedTokenRepository revokedTokenRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
        }

        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists!");
        }

        if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords do not match!");
        }

        UserEntity user = new UserEntity();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setRole(userDTO.getRole() != null ? userDTO.getRole() : UserEntity.Role.ROLE_BASIC_TRAVELER);

        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginUser loginUser) {
        Optional<UserEntity> existingUser = userRepository.findByUsername(loginUser.getUsername());

        if (existingUser.isPresent() &&
                passwordEncoder.matches(loginUser.getPassword(), existingUser.get().getPassword())) {

            String roleWithPrefix = existingUser.get().getRole().name();

            return ResponseEntity.ok(Map.of(
                    "accessToken", jwtUtil.generateToken(existingUser.get().getUsername(), roleWithPrefix),
                    "refreshToken", jwtUtil.generateRefreshToken(existingUser.get().getUsername())
            ));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token,
                                         @RequestBody(required = false) Map<String, String> request) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            revokedTokenRepository.save(new RevokedToken(token));
        }

        if (request != null && request.containsKey("refreshToken")) {
            revokedTokenRepository.save(new RevokedToken(request.get("refreshToken")));
        }

        return ResponseEntity.ok("Logged out successfully.");
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {
        String refreshToken = request.get("refreshToken");

        if (refreshToken == null || jwtUtil.isTokenExpired(refreshToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token.");
        }

        String username = jwtUtil.getUsernameFromToken(refreshToken);
        Optional<UserEntity> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
        }

        UserEntity user = userOpt.get();
        String roleWithPrefix = user.getRole().name();

        return ResponseEntity.ok(Map.of(
                "accessToken", jwtUtil.generateToken(user.getUsername(), roleWithPrefix)
        ));
    }
}
