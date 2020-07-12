package com.xerian.encore.server.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.xerian.encore.server.openapi.api.ItemApiDelegate;
import com.xerian.encore.server.openapi.model.Item;
import com.xerian.encore.server.repository.ItemRepository;
import com.xerian.encore.server.service.mapper.ItemMapper;

@Service
public class ItemService implements ItemApiDelegate {

	private ItemRepository repository;
	private ItemMapper mapper;

	public ItemService(
			ItemRepository repository,
			ItemMapper mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

    @Override
	public ResponseEntity<Item> addItem(Item Item) {

    	Item newItem = mapper.fromEntity(repository.save(mapper.toEntity(Item)));

    	return ResponseEntity.ok(newItem);

    }


}
