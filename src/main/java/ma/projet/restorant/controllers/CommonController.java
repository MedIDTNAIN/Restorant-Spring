package ma.projet.restorant.controllers;

import ma.projet.restorant.dto.Dto;
import ma.projet.restorant.dto.UserDetailsDto;
import ma.projet.restorant.security.JwtUtil;
import ma.projet.restorant.service.ProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/common")
public class CommonController {

    private ProfileService profileService;

    public CommonController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/userProfile")
    public ResponseEntity<?> getUserProfile(HttpServletRequest request){

        String userId=JwtUtil.verifyUser(request);

        UserDetailsDto userDetailsDto=profileService.getDetails(userId);

        return (userDetailsDto.isApiStatus()) ? ResponseEntity.ok().body(userDetailsDto)
                : ResponseEntity.status(HttpStatus.FORBIDDEN).body(new Dto(userDetailsDto.isApiStatus(),userDetailsDto.getApiMsg()));

    }

    @PutMapping("/updateUserProfile")
    public ResponseEntity<?> updateUserProfile(@RequestBody UserDetailsDto userDetailsDto, HttpServletRequest request){

        String userId=JwtUtil.verifyUser(request);

        Dto dto=new Dto();

        if(userId.equals(userDetailsDto.getUserDto().getUserId())){
            dto=profileService.updateUserProfile(userDetailsDto);
        }

        return (dto.isApiStatus()) ? ResponseEntity.ok().body(dto)
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dto);

    }

}
