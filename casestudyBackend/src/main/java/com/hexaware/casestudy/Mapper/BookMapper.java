package com.hexaware.casestudy.Mapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hexaware.casestudy.Dto.TaskDTO;
import com.hexaware.casestudy.Entity.Task;


@Component
public class BookMapper {

    @Autowired
    private ModelMapper modelMapper;

    public Task TaskDtoTotask(TaskDTO dto) {
        return modelMapper.map(dto, Task.class);
    }

    public TaskDTO bookToBookDto(Task book) {
        return modelMapper.map(book, TaskDTO.class);
    }
}
