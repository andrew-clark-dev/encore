package com.xerian.encore.server.service.mapper;

import org.mapstruct.Mapper;

import com.xerian.encore.server.domain.UserEntity;
import com.xerian.encore.server.openapi.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	User fromEntity(UserEntity entity);
	UserEntity toEntity(User entity);

}
