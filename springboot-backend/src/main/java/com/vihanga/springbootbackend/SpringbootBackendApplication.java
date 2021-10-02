package com.vihanga.springbootbackend;

import com.vihanga.springbootbackend.model.Employee;
import com.vihanga.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		/*Employee employee = new Employee();
		employee.setFirstName("Vihanga");
		employee.setLastName("Malinda");
		employee.setEmailID("vihang@gmail.com");
		employeeRepository.save(employee);

		Employee employee1 = new Employee();
		employee1.setFirstName("aaaaa");
		employee1.setLastName("bbbbb");
		employee1.setEmailID("abc@gmail.com");
		employeeRepository.save(employee1);

		 */
	}
}
