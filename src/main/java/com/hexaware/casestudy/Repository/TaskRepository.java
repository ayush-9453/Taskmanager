package com.hexaware.casestudy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.casestudy.Entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}