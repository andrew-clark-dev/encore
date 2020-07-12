package com.xerian.encore.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xerian.encore.server.domain.ItemEntity;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {

	ItemEntity findById(long id);
	
}
