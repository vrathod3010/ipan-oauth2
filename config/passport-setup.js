const passoprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passoprt.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : keys.google.callbackURL,
        clientID : keys.google.clientID,
        clientSecret : 'w_C0BHDE4U1FJJ60ppJBPEQb'
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function
        console.log(profile);
    })

    
)
