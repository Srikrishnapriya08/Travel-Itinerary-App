// // // package com.examly.springapp.controller;

// // // import com.examly.springapp.model.ActivityEntity;
// // // import com.examly.springapp.service.ActivityService;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.*;

// // // import java.util.List;

// // // @RestController
// // // @RequestMapping("/api/activities")
// // // public class ActivityController {

// // //     private final ActivityService activityService;

// // //     public ActivityController(ActivityService activityService) {
// // //         this.activityService = activityService;
// // //     }

// // //     @GetMapping
// // //     public List<ActivityEntity> getAllActivities() {
// // //         return activityService.getAllActivities();
// // //     }

// // //     @GetMapping("/{id}")
// // //     public ResponseEntity<ActivityEntity> getActivityById(@PathVariable Long id) {
// // //         return activityService.getActivityById(id)
// // //                 .map(ResponseEntity::ok)
// // //                 .orElse(ResponseEntity.notFound().build());
// // //     }

// // //     @PostMapping
// // //     public ActivityEntity createActivity(@RequestBody ActivityEntity activity) {
// // //         return activityService.createActivity(activity);
// // //     }

// // //     @PutMapping("/{id}")
// // //     public ResponseEntity<ActivityEntity> updateActivity(@PathVariable Long id, @RequestBody ActivityEntity activityDetails) {
// // //         try {
// // //             return ResponseEntity.ok(activityService.updateActivity(id, activityDetails));
// // //         } catch (RuntimeException e) {
// // //             return ResponseEntity.notFound().build();
// // //         }
// // //     }

// // //     @DeleteMapping("/{id}")
// // //     public String deleteActivity(@PathVariable Long id) {
// // //         activityService.deleteActivity(id);
// // //         return "Activity deleted successfully";
// // //     }
// // // }
// // package com.examly.springapp.controller;

// // import com.examly.springapp.dto.ActivityDTO;
// // import com.examly.springapp.service.ActivityService;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/activities")
// // @CrossOrigin(origins = "*")
// // public class ActivityController {

// //     private final ActivityService activityService;

// //     public ActivityController(ActivityService activityService) {
// //         this.activityService = activityService;
// //     }

// //     @GetMapping
// //     public List<ActivityDTO> getAllActivities() {
// //         return activityService.getAllActivities();
// //     }

// //     @GetMapping("/{id}")
// //     public ResponseEntity<ActivityDTO> getActivityById(@PathVariable Long id) {
// //         return activityService.getActivityById(id)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     public ActivityDTO createActivity(@RequestBody ActivityDTO dto) {
// //         return activityService.createActivity(dto);
// //     }

// //     @PutMapping("/{id}")
// //     public ResponseEntity<ActivityDTO> updateActivity(@PathVariable Long id,
// //                                                       @RequestBody ActivityDTO dto) {
// //         try {
// //             return ResponseEntity.ok(activityService.updateActivity(id, dto));
// //         } catch (RuntimeException e) {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteActivity(@PathVariable Long id) {
// //         activityService.deleteActivity(id);
// //         return "Activity deleted successfully";
// //     }
// // }
// package com.examly.springapp.controller;

// import com.examly.springapp.dto.ActivityDTO;
// import com.examly.springapp.service.ActivityService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.access.prepost.PreAuthorize;

// import java.util.List;

// @RestController
// @RequestMapping("/api/activities")
// @CrossOrigin(origins = "*")
// public class ActivityController {

//     private final ActivityService activityService;

//     public ActivityController(ActivityService activityService) {
//         this.activityService = activityService;
//     }

//     @GetMapping
//     @PreAuthorize("hasAnyRole('PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public List<ActivityDTO> getAllActivities() {
//         return activityService.getAllActivities();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAnyRole('PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<ActivityDTO> getActivityById(@PathVariable Long id) {
//         return activityService.getActivityById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasAnyRole('PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ActivityDTO createActivity(@RequestBody ActivityDTO dto) {
//         return activityService.createActivity(dto);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasAnyRole('PREMIUM_TRAVELER','TRAVEL_AGENT','ADMIN')")
//     public ResponseEntity<ActivityDTO> updateActivity(@PathVariable Long id,
//                                                       @RequestBody ActivityDTO dto) {
//         try {
//             return ResponseEntity.ok(activityService.updateActivity(id, dto));
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasRole('ADMIN')")
//     public String deleteActivity(@PathVariable Long id) {
//         activityService.deleteActivity(id);
//         return "Activity deleted successfully";
//     }
// }



package com.examly.springapp.controller;

import com.examly.springapp.dto.ActivityDTO;
import com.examly.springapp.service.ActivityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "*")
public class ActivityController {

    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public List<ActivityDTO> getAllActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<ActivityDTO> getActivityById(@PathVariable Long id) {
        return activityService.getActivityById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ActivityDTO createActivity(@RequestBody ActivityDTO dto) {
        return activityService.createActivity(dto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_PREMIUM_TRAVELER','ROLE_TRAVEL_AGENT','ROLE_ADMIN')")
    public ResponseEntity<ActivityDTO> updateActivity(@PathVariable Long id,
                                                      @RequestBody ActivityDTO dto) {
        try {
            return ResponseEntity.ok(activityService.updateActivity(id, dto));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return "Activity deleted successfully";
    }
}
