package ma.projet.restorant.reposit;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.projet.restorant.entities.Resto;

public interface RestoRepository extends JpaRepository<Resto, Integer>{

	Resto findById(int id);
	/*
	@Query("select year(s.dateNaissance) as annee, count(*) as nbr from Student s group by year(s.dateNaissance)
	order by year(s.dateNaissance)")
	Collection<?> findNbrStudentByYear();
	*/
}
