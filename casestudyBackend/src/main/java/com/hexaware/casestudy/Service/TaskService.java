package com.hexaware.casestudy.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.casestudy.Entity.Task;
import com.hexaware.casestudy.Exception.TaskNotFoundException;
import com.hexaware.casestudy.Repository.TaskRepository;

@Service
public class TaskService implements ITask {

    private final TaskRepository repo;
    
    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    @Override
    public Task getTaskById(int id) {
        return repo.findById((long) id).orElseThrow(() -> new TaskNotFoundException("Task not found"));
    }

    @Override
    public Task addTask(Task task) {
        return repo.save(task);
    }

    @Override
    public Task updateTask(int id, Task task) {
        Task existingTask = repo.findById((long) id).orElseThrow(() -> new TaskNotFoundException("Task not found"));

        existingTask.setTitle(task.getTitle());
        existingTask.setDescription(task.getDescription());
        existingTask.setDueDate(task.getDueDate());
        existingTask.setPriority(task.getPriority());
        existingTask.setStatus(task.getStatus());

        return repo.save(existingTask);
    }

    @Override
    public void deleteTask(int id) {
        if (!repo.existsById((long) id)) {
            throw new TaskNotFoundException("Task not found");
        }
        repo.deleteById((long) id);
    }

    @Override
    public List<Task> getAllTasks() {
        List<Task> allTasks = repo.findAll();
        if (allTasks.isEmpty()) {
            throw new TaskNotFoundException("No Tasks found");
        }
        return allTasks;
    }
}