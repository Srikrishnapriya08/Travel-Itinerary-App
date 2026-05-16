// // // // package com.examly.springapp.controller;

// // // // import com.examly.springapp.model.UserEntity;
// // // // import com.examly.springapp.service.UserService;
// // // // import org.springframework.http.ResponseEntity;
// // // // import org.springframework.web.bind.annotation.*;

// // // // import java.util.List;
// // // // @CrossOrigin(origins="*")
// // // // @RestController
// // // // @RequestMapping("/api/users")
// // // // public class UserController {

// // // //     private final UserService userService;

// // // //     public UserController(UserService userService) {
// // // //         this.userService = userService;
// // // //     }

// // // //     @GetMapping
// // // //     public List<UserEntity> getAllUsers() {
// // // //         return userService.getAllUsers();
// // // //     }

// // // //     @GetMapping("/{id}")
// // // //     public ResponseEntity<UserEntity> getUserById(@PathVariable Long id) {
// // // //         return userService.getUserById(id)
// // // //                 .map(ResponseEntity::ok)
// // // //                 .orElse(ResponseEntity.notFound().build());
// // // //     }

// // // //     @PostMapping
// // // //     public UserEntity createUser(@RequestBody UserEntity user) {
// // // //         return userService.createUser(user);
// // // //     }

// // // //     @PutMapping("/{id}")
// // // //     public ResponseEntity<UserEntity> updateUser(@PathVariable Long id, @RequestBody UserEntity user) {
// // // //         try {
// // // //             return ResponseEntity.ok(userService.updateUser(id, user));
// // // //         } catch (RuntimeException e) {
// // // //             return ResponseEntity.notFound().build();
// // // //         }
// // // //     }

// // // //     @DeleteMapping("/{id}")
// // // //     public String deleteUser(@PathVariable Long id) {
// // // //         userService.deleteUser(id);
// // // //        return "User deleted successfully";
// // // //     }
// // // // }
// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.dto.UserDTO;
// // // import com.examly.springapp.service.UserService;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.List;

// // // @RestController
// // // @RequestMapping("/api/users")
// // // @CrossOrigin(origins = "*")
// // // public class UserController {

// // //     private final UserService userService;

// // //     public UserController(UserService userService) {
// // //         this.userService = userService;
// // //     }

// // //     @GetMapping
// // //     public List<UserDTO> getAllUsers() {
// // //         return userService.getAllUsers();
// // //     }

// // //     @GetMapping("/{id}")
// // //     public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
// // //         return userService.getUserById(id)
// // //                 .map(ResponseEntity::ok)
// // //                 .orElse(ResponseEntity.notFound().build());
// // //     }

// // //     @PostMapping
// // //     public UserDTO createUser(@RequestBody UserDTO userDTO) {
// // //         return userService.createUser(userDTO);
// // //     }

// // //     @PutMapping("/{id}")
// // //     public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
// // //         try {
// // //             return ResponseEntity.ok(userService.updateUser(id, userDTO));
// // //         } catch (RuntimeException e) {
// // //             return ResponseEntity.notFound().build();
// // //         }
// // //     }

// // //     @DeleteMapping("/{id}")
// // //     public String deleteUser(@PathVariable Long id) {
// // //         userService.deleteUser(id);
// // //         return "User deleted successfully";
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.UserDTO;
// // import com.examly.springapp.service.UserService;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;
// // import org.springframework.security.access.prepost.PreAuthorize;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/users")
// // @CrossOrigin(origins = "*")
// // public class UserController {

// //     private final UserService userService;

// //     public UserController(UserService userService) {
// //         this.userService = userService;
// //     }

// //     @GetMapping
// //     @PreAuthorize("hasRole('ADMIN')")
// //     public List<UserDTO> getAllUsers() {
// //         return userService.getAllUsers();
// //     }

// //     @GetMapping("/{id}")
// //     @PreAuthorize("hasRole('ADMIN')")
// //     public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
// //         return userService.getUserById(id)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     @PreAuthorize("hasRole('ADMIN')")
// //     public UserDTO createUser(@RequestBody UserDTO userDTO) {
// //         return userService.createUser(userDTO);
// //     }

// //     @PutMapping("/{id}")
// //     @PreAuthorize("hasRole('ADMIN')")
// //     public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
// //         try {
// //             return ResponseEntity.ok(userService.updateUser(id, userDTO));
// //         } catch (RuntimeException e) {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{id}")
// //     @PreAuthorize("hasRole('ADMIN')")
// //     public String deleteUser(@PathVariable Long id) {
// //         userService.deleteUser(id);
// //         return "User deleted successfully";
// //     }
// // }



// package com.examly.springapp.controller;

// import com.examly.springapp.dto.UserDTO;
// import com.examly.springapp.service.UserService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.access.prepost.PreAuthorize;

// import java.util.List;

// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "*")
// public class UserController {

//     private final UserService userService;

//     public UserController(UserService userService) {
//         this.userService = userService;
//     }

//     @GetMapping
//     @PreAuthorize("hasRole('ROLE_ADMIN')")
//     public List<UserDTO> getAllUsers() {
//         return userService.getAllUsers();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasRole('ROLE_ADMIN')")
//     public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
//         return userService.getUserById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasRole('ROLE_ADMIN')")
//     public UserDTO createUser(@RequestBody UserDTO userDTO) {
//         return userService.createUser(userDTO);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasRole('ROLE_ADMIN')")
//     public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
//         try {
//             return ResponseEntity.ok(userService.updateUser(id, userDTO));
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasRole('ROLE_ADMIN')")
//     public String deleteUser(@PathVariable Long id) {
//         userService.deleteUser(id);
//         return "User deleted successfully";
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.UserDTO;
import com.examly.springapp.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        try {
            return ResponseEntity.ok(userService.updateUser(id, userDTO));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }
}
