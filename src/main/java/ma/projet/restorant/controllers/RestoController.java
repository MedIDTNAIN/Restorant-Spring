package ma.projet.restorant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@PutMapping("/update/{id}")
	public void update(@PathVariable(required = true) String id, @RequestBody Resto Rest) {
		//restoRepository.update(id, Rest);
	}
	
	@GetMapping("/all")
	public List<Resto> findAll() {
		return restoRepository.findAll();
	}

	@GetMapping(value = "/count")
	public long countResto() {
		return restoRepository.count();
	}
	
	@GetMapping("/byName/{nom}")
	public List<Resto> findByNom(@PathVariable(required = true) String nom) {
		return restoRepository.findByNom(nom);
	}
	
	@GetMapping("/byAddress/{adresse}")
	public List<Resto> findByAdresse(@PathVariable(required = true) String adresse) {
		return restoRepository.findByAdresse(adresse);
	}
	
	@GetMapping("/byRank/{rank}")
	public List<Resto> findByRank(@PathVariable(required = true) String rank) {
		return restoRepository.findByRank(Integer.parseInt(rank));
	}
}
