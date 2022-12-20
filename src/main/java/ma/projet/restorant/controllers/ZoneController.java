package ma.projet.restorant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.projet.restorant.entities.Zone;
import ma.projet.restorant.reposit.ZoneRepository;

@RestController
@RequestMapping("zones")
public class ZoneController {
	@Autowired
	private ZoneRepository zoneRepository;

	@PostMapping("/save")
	public void save(@RequestBody Zone Zone) {
		zoneRepository.save(Zone);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Zone s = zoneRepository.findById(Integer.parseInt(id));
		zoneRepository.delete(s);
	}

	@GetMapping("/all")
	public List<Zone> findAll() {
		return zoneRepository.findAll();
	}

	@GetMapping(value = "/count")
	public long countResto() {
		return zoneRepository.count();
	}
	
	@GetMapping("/byName/{nom}")
	public List<Zone> findByNom(@PathVariable(required = true) String nom) {
		return zoneRepository.findByNom(nom);
	}
	
	@GetMapping("/findByVille")
	public List<Zone> findZoneByVille(@RequestParam String id) {
		return zoneRepository.findZoneByVille(Integer.parseInt(id));
	}
}
