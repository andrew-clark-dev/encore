package com.xerian.encore.server.service.mapper;

import org.mapstruct.Mapper;

import com.xerian.encore.server.domain.ItemEntity;
import com.xerian.encore.server.openapi.model.Item;

@Mapper(componentModel = "spring")
public interface ItemMapper {
	
	Item fromEntity(ItemEntity entity);
	ItemEntity toEntity(Item entity);

}
