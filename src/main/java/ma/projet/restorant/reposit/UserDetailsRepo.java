package ma.projet.restorant.reposit;

import ma.projet.restorant.entities.User;
import ma.projet.restorant.entities.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepo extends JpaRepository<UserDetails,Long> {
    UserDetails findByUser(User user);
}
