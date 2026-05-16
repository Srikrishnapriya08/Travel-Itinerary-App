// package com.examly.springapp.service;

// import com.examly.springapp.model.ActivityEntity;
// import com.examly.springapp.repository.ActivityRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class ActivityService {

//     private final ActivityRepository activityRepository;

//     public ActivityService(ActivityRepository activityRepository) {
//         this.activityRepository = activityRepository;
//     }

//     public List<ActivityEntity> getAllActivities() {
//         return activityRepository.findAll();
//     }

//     public Optional<ActivityEntity> getActivityById(Long id) {
//         return activityRepository.findById(id);
//     }

//     public ActivityEntity createActivity(ActivityEntity activity) {
//         return activityRepository.save(activity);
//     }

//     public ActivityEntity updateActivity(Long id, ActivityEntity activityDetails) {
//         return activityRepository.findById(id).map(activity -> {
//             activity.setDestination(activityDetails.getDestination());
//             activity.setName(activityDetails.getName());
//             activity.setDescription(activityDetails.getDescription());
//             activity.setCategory(activityDetails.getCategory());
//             activity.setDuration(activityDetails.getDuration());
//             activity.setCost(activityDetails.getCost());
//             activity.setRating(activityDetails.getRating());
//             activity.setCreatedDate(activityDetails.getCreatedDate());
//             return activityRepository.save(activity);
//         }).orElseThrow(() -> new RuntimeException("Activity not found with id " + id));
//     }

//     public void deleteActivity(Long id) {
//         activityRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.ActivityDTO;
import com.examly.springapp.model.ActivityEntity;
import com.examly.springapp.repository.ActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    private ActivityDTO toDTO(ActivityEntity activity) {
        ActivityDTO dto = new ActivityDTO();
        dto.setId(activity.getId());
        dto.setName(activity.getName());
        dto.setDescription(activity.getDescription());
        dto.setCategory(activity.getCategory().name());
        dto.setDuration(activity.getDuration());
        dto.setCost(activity.getCost());
        dto.setRating(activity.getRating());
        dto.setCreatedDate(activity.getCreatedDate());
        return dto;
    }

    private ActivityEntity toEntity(ActivityDTO dto) {
        ActivityEntity activity = new ActivityEntity();
        activity.setId(dto.getId());
        activity.setName(dto.getName());
        activity.setDescription(dto.getDescription());
        activity.setCategory(ActivityEntity.Category.valueOf(dto.getCategory()));
        activity.setDuration(dto.getDuration());
        activity.setCost(dto.getCost());
        activity.setRating(dto.getRating());
        activity.setCreatedDate(dto.getCreatedDate());
        return activity;
    }

    public List<ActivityDTO> getAllActivities() {
        return activityRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<ActivityDTO> getActivityById(Long id) {
        return activityRepository.findById(id).map(this::toDTO);
    }

    public ActivityDTO createActivity(ActivityDTO dto) {
        return toDTO(activityRepository.save(toEntity(dto)));
    }

    public ActivityDTO updateActivity(Long id, ActivityDTO dto) {
        return activityRepository.findById(id)
                .map(activity -> {
                    activity.setName(dto.getName());
                    activity.setDescription(dto.getDescription());
                    activity.setCategory(ActivityEntity.Category.valueOf(dto.getCategory()));
                    activity.setDuration(dto.getDuration());
                    activity.setCost(dto.getCost());
                    activity.setRating(dto.getRating());
                    activity.setCreatedDate(dto.getCreatedDate());
                    return toDTO(activityRepository.save(activity));
                }).orElseThrow(() -> new RuntimeException("Activity not found with id " + id));
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
