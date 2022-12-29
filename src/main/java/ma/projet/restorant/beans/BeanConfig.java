package ma.projet.restorant.beans;


import ma.projet.restorant.service.AdminService;
import ma.projet.restorant.service.AdminServiceImpl;
import ma.projet.restorant.service.ProfileService;
import ma.projet.restorant.service.ProfileServiceImpl;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public AdminService adminService(){
        return new AdminServiceImpl();
    }

    @Bean
    public ProfileService profileService(){return new ProfileServiceImpl();
    }

    @Bean
    public ModelMapper modelMapper(){
        ModelMapper modelMapper= new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE); //For Mapping Nested Objects Too
        return modelMapper;
    }

}
