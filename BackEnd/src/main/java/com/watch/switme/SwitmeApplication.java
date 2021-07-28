package com.watch.switme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SwitmeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwitmeApplication.class, args);
	}

}
