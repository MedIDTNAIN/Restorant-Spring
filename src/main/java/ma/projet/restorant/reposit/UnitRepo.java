package ma.projet.restorant.reposit;

import ma.projet.restorant.entities.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitRepo extends JpaRepository<Unit,Long> {

}
