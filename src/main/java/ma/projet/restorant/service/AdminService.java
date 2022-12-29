package ma.projet.restorant.service;


import ma.projet.restorant.dto.UserDto;
import ma.projet.restorant.entities.Unit;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public interface AdminService {
     List<Unit> getAllUnit();

     List<UserDto> getUsers();

     public UserDto addUser(UserDto userDto);
}
