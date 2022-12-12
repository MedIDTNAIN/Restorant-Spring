package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Specialite;

public interface SpecialiteRepository extends JpaRepository<Specialite, Integer>{
	
	Specialite findById(int id);
	
}
