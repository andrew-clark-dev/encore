package com.xerian.encore.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xerian.encore.server.domain.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

	UserEntity findById(long id);
	
}
