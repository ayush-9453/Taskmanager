package com.hexaware.casestudy.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import com.hexaware.casestudy.Dto.AuthRequestDTO;
import com.hexaware.casestudy.Dto.RegisterDTO;
import com.hexaware.casestudy.Entity.Users;
import com.hexaware.casestudy.Repository.UserRepository;
import com.hexaware.casestudy.Service.IUserService;
import com.hexaware.casestudy.utils.JwtUtil;


@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private UserRepository userRepository;
	
	
	
	@Autowired
	private IUserService userService;
	
	@PostMapping("/register")
	public String register(@RequestBody RegisterDTO registerRequest) {
	    return userService.register(registerRequest);
	}

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody AuthRequestDTO authRequest) {
	    try {
	        authenticationManager.authenticate(
	            new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
	    } catch (AuthenticationException ex) {
	        throw new RuntimeException("Invalid username or password");
	    }

	    Users user = userRepository.findByUsername(authRequest.getUsername())
	        .orElseThrow(() -> new RuntimeException("User not found"));

	    String token = jwtUtil.generateToken(user.getUsername());

	    return ResponseEntity.ok(token);
	}

}
