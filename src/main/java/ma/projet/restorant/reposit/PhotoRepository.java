package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer>{

	Photo findById(int id);
	
}
