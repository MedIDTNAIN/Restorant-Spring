package ma.projet.restorant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import ma.projet.restorant.entities.User;
import ma.projet.restorant.reposit.UserRepository;

@RestController
@RequestMapping("users")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/save")
	public void save(@RequestBody User user){
		userRepository.save(user);
	}

	@GetMapping("/all")
	public List<User> findAll(){
		return userRepository.findAll();
	}
}
