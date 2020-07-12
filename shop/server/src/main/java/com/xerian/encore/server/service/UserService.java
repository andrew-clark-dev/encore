package com.xerian.encore.server.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.xerian.encore.server.openapi.api.UserApiDelegate;
import com.xerian.encore.server.openapi.model.User;
import com.xerian.encore.server.repository.UserRepository;
import com.xerian.encore.server.service.mapper.UserMapper;

@Service
public class UserService implements UserApiDelegate {

	private UserRepository repository;
	private UserMapper mapper;

	public UserService(
			UserRepository repository,
			UserMapper mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

    @Override
	public ResponseEntity<User> createUser(User User) {

    	User newUser = mapper.fromEntity(repository.save(mapper.toEntity(User)));

    	return ResponseEntity.ok(newUser);

    }


}
