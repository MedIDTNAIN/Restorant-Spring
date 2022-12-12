package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Serie;

public interface SerieRepository extends JpaRepository<Serie, Integer>{

	Serie findById(int id);
	
}
