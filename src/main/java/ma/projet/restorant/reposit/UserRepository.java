package ma.projet.restorant.reposit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ma.projet.restorant.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	User findById(int id);
	
	public User findByNom(String nom);

	
	@Query("select p from User p where p.email = :email")
	List<User> findByEmail(String email);
	
}
