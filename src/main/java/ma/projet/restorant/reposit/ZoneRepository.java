package ma.projet.restorant.reposit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ma.projet.restorant.entities.Zone;

public interface ZoneRepository extends JpaRepository<Zone, Integer>{
	
	Zone findById(int id);
	
	@Query("select s from Specialite s where s.nom = :nom")
	List<Zone> findByNom(String nom);

	
	List<Zone> findZoneByVille(int parseInt);
}
