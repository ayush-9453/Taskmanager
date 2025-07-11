package com.hexaware.casestudy.Service;

import com.hexaware.casestudy.Dto.RegisterDTO;

public interface IUserService {
    String register(RegisterDTO registerRequest);
    
}
