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
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'https://oauth-ipan2.herokuapp.com/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.sub}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.sub
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);
// passoprt.use(
//     new GoogleStrategy({
//         //options for the google start
//         callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
//         clientID : keys.google.clientID,
//         clientSecret : keys.google.clientSecret
//     },(accessToken,refreshToken,profile,done)=>{
//         //passport callback function
//         console.log(profile.sub);

//         User.findOne({googleId: profile.pub}).then((currentUser)=>{
//             if(currentUser){
//                 //already have the user
//                 console.log('user is: ',currentUser);
//                 done(profile);
//             }else{
//                 //create a new user
//                 new User({
//                     googleId : profile.sub
//                 }).save().then((newUser) =>{
//                     console.log("new user",newUser);
//                     done(null,newUser);
//                 });
//             }
//         });
     
//     })

    
// )
