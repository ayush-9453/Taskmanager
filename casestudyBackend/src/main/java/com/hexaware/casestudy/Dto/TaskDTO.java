package com.hexaware.casestudy.Dto;

import java.time.LocalDate;

import com.hexaware.casestudy.Entity.Task.Priority;
import com.hexaware.casestudy.Entity.Task.Status;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {
    private Long id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private Priority priority;
    private Status status;
    
}
