package com.hexaware.casestudy.Service;

import java.util.List;

import com.hexaware.casestudy.Entity.Task;

public interface ITask {
    List<Task> getAllTasks();
    Task getTaskById(int id);
    Task addTask(Task Task);
    Task updateTask(int id, Task Task);
    void deleteTask(int id);
}
