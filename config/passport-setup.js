const passoprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');


passoprt.serializeUser((user,done)=>{
    done(null,user.username);
});

passoprt.deserializeUser((name,done)=>{
    User.findById(name).then((user)=>{
        done(null,user.username);
    });
});

passoprt.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function
        console.log(profile.name.givenName);

        // User.findOne({username: profile.name.givenName}).then((currentUser)=>{
        //     if(currentUser){
        //         //already have the user
        //         console.log('user is: ',currentUser);
                done(null);
        //     }else{
        //         //create a new user
        //         new User({
        //             username : profile.name.givenName,
        //             googleId : profile.sub
        //         }).save().then((newUser) =>{
        //             console.log("new user",newUser);
        //             done(null,newUser);
        //         });
        //     }
        // });
     
    })

    
)
