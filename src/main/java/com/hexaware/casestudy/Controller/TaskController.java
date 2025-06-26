package com.hexaware.casestudy.Controller;

import java.util.List;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.hexaware.casestudy.Entity.Task;
import com.hexaware.casestudy.Service.ITask;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/Task")
public class TaskController {

    private final ITask TaskService;

    public TaskController(ITask TaskService) {
        this.TaskService = TaskService;
    }

    @PostMapping("/addTask")
    public ResponseEntity<Task> addTask(@RequestBody Task Task) {
        Task createdTask = TaskService.addTask(Task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> allTasks = TaskService.getAllTasks();
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable int id) {
        Task Task = TaskService.getTaskById(id);
        if (Task != null) {
            return new ResponseEntity<>(Task, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable int id) {
        TaskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable int id, @RequestBody Task Task) {
        Task updatedTask = TaskService.updateTask(id, Task);
        if (updatedTask != null) {
            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
