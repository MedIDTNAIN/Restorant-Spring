package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Ville;

public interface VilleRepository extends JpaRepository<Ville, Integer>{

	Ville findById(int id);
	
}
