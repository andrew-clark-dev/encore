package com.xerian.encore.server.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

	@RequestMapping("/hello")
	public String index() {
		return "Greetings from Spring Boot!";
	}

}