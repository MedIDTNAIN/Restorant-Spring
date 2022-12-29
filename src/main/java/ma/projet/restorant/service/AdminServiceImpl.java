package ma.projet.restorant.service;

import ma.projet.restorant.dto.UserDto;
import ma.projet.restorant.entities.Unit;
import ma.projet.restorant.entities.User;
import ma.projet.restorant.entities.UserDetails;
import ma.projet.restorant.reposit.UnitRepo;
import ma.projet.restorant.reposit.UserDetailsRepo;
import ma.projet.restorant.reposit.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

public class AdminServiceImpl implements AdminService {
    @Autowired
    UnitRepo unitRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    UserDetailsRepo userDetailsRepo;

    @Autowired
    ModelMapper mapper;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public List<Unit> getAllUnit() {
         return unitRepo.findAll();

    }

    @Override
    public List<UserDto> getUsers() {
        List<User> userList=userRepo.findAll();
        List<UserDto> userDtoList=new ArrayList<>();
        userList.forEach(User->{
            UserDto userDto=mapper.map(User,UserDto.class);
            userDtoList.add(userDto);
        });

        return userDtoList;
    }

    @Override
    public UserDto addUser(UserDto userDto) {

        User user= mapper.map(userDto,User.class);
        try{
            if(userRepo.findByUserId(userDto.getUserId())!=null){
                throw new DuplicateKeyException(userDto.getUserId()+":Already exists");
            }
            user.setPassword(passwordEncoder.encode(userDto.getUserId()));
            user.setActive(true);
            User savedUser=userRepo.save(user);
            userDetailsRepo.save(new UserDetails("NA",'N',"NA","NA",savedUser));//Initializing User details table
            userDto.setApiStatus(true);
            userDto.setApiMsg("Added");
        }catch (Exception e){
            userDto.setApiStatus(false);
            userDto.setApiMsg(e.getMessage());
        }

        return userDto;
    }
}
