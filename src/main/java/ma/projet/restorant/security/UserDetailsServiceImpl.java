package ma.projet.restorant.security;


import ma.projet.restorant.entities.User;
import ma.projet.restorant.reposit.UserRepo;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepo userRepo;

    public UserDetailsServiceImpl(UserRepo userRepo) {
        this.userRepo=userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user =this.userRepo.findByUserId(s);
        UserPrincipal userPrincipal=new UserPrincipal(user);
        return userPrincipal;
    }


}

