package com.hexaware.casestudy.Entity;

// import jakarta.validation.constraints.*;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "task")  
public class Task {

  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate dueDate;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Priority {
        LOW,
        MEDIUM,
        HIGH 
    }
    public enum Status { 
        PENDING,
        IN_PROGRESS, 
        COMPLETED 
    }
}
