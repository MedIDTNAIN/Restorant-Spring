package ma.projet.restorant.controllers;

import ma.projet.restorant.entities.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController {


    @GetMapping("")
    public User user(){
        return new User();
    }

}
