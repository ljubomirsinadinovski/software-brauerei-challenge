package com.example.echo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class EchoApplication {

	public static void main(String[] args) {
		SpringApplication.run(EchoApplication.class, args);
	}


	@GetMapping("/")
	public String echoNameFromPath(@RequestParam(name = "name") String echoText) {
		// In this case, we return the plain text response "ok"
		return "Hello " + echoText + "!";
	}

	@PostMapping(value = "/")
	public String echoNameFromPost(@RequestBody String name) {
		return "Hello " + name + "!";
	}

}
