const passoprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passoprt.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function
        console.log(profile.name);

        // User.findOne({emailId: profile.email}).then((currentUser)=>{
        //     if(currentUser){
        //         //already have the user
        //         console.log('user is: ',currentUser);
        //     }else{
        //         //create a new user
        //         new User({
        //             username : profile.name,
        //             googleId : profile.sub
        //         }).save().then((newUser) =>{
        //             console.log("new user created"+newUser)
        //         });
        //     }
        // });
     
    })

    
)
