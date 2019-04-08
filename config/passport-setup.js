const passoprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')

passoprt.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function
        console.log(profile);
    })

    
)
