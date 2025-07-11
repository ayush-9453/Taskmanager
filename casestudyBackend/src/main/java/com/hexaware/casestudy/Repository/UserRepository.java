package com.hexaware.casestudy.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.casestudy.Entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {

   Optional<Users> findByUsername(String username);
}