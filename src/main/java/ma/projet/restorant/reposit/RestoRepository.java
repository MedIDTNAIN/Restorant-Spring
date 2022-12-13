package ma.projet.restorant.reposit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ma.projet.restorant.entities.Resto;
import ma.projet.restorant.entities.Serie;
import ma.projet.restorant.entities.Zone;

public interface RestoRepository extends JpaRepository<Resto, Integer>{

	Resto findById(int id);
	
	@Query("select r from Resto r where r.nom = :nom")
	List<Resto> findByNom(String nom);

	@Query("select r from Resto r where r.adresse = :adresse")
	List<Resto> findByAdresse(String adresse);
	
	@Query("select r from Resto r where r.rank = :rank order by nom desc")
	List<Resto> findByRank(int rank);
	
	@Query("select r from Resto r where r.zone like :zone")
	List<Resto> findByZone(Zone zone);
	
	@Query("select r from Resto r where r.serie like :serie")
	List<Resto> findBySerie(Serie serie);
	
}
