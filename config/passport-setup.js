const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function
        console.log(profile);

        User.findOne({googleId: profile.sub}).then((currentUser)=>{
            if(currentUser){
                //already have the user
                console.log('user is: ',currentUser);
                done(null,currentUser);
            }else{
                //create a new user
                new User({
                    googleId : profile.sub
                }).save().then((newUser) =>{
                    console.log("new user",newUser);
                    done(null,newUser);
                });
            }
        });
    })

    
)
