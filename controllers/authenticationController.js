const passport = require('passport');
const User = require('../models/user');

class AuthenticationController{

  register(req, res, next){

    const newUser = new User(req.body);

    const user = User.register(newUser, req.body.password, (err, user)=>{
      if (err) {
        return res.status(401).json(JSON.stringify({error: err}));
      }else{
        return res.status(200).json(JSON.stringify(user));
      }
    })
 }

 login(req, res, next){
   passport.authenticate('local')(req, res, ()=>{
     if (req.user) {
       return res.json(JSON.stringify(req.user));
     }

     return res.json(JSON.stringify({error: "There was an error loggin in"}));
   })
 }

 logout(req, res){
   req.logout();

   return res.json(JSON.stringify(req.user));

 }

}

module.exports = new AuthenticationController();
