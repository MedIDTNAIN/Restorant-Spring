package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Zone;

public interface ZoneRepository extends JpaRepository<Zone, Integer>{
	
	Zone findById(int id);
	
	
}
