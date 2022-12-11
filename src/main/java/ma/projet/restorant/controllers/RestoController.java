package ma.projet.restorant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.projet.restorant.entities.Resto;
import ma.projet.restorant.reposit.RestoRepository;

@RestController
@RequestMapping("restos")
public class RestoController {
	@Autowired
	private RestoRepository restoRepository;

	@PostMapping("/save")
	public void save(@RequestBody Resto Resto) {
		restoRepository.save(Resto);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Resto s = restoRepository.findById(Integer.parseInt(id));
		restoRepository.delete(s);
	}

	@GetMapping("/all")
	public List<Resto> findAll() {
		return restoRepository.findAll();
	}

	@GetMapping(value = "/count")
	public long countResto() {
		return restoRepository.count();
	}
}
