package ma.projet.restorant.service;

import ma.projet.restorant.dto.Dto;
import ma.projet.restorant.dto.UserDetailsDto;
import org.springframework.stereotype.Service;

@Service
public interface ProfileService {
    UserDetailsDto getDetails(String userID);
    Dto updateUserProfile(UserDetailsDto userDetailsDto);
}
