const passoprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passoprt.use(
    new GoogleStrategy({
        //options for the google start
        callbackURL : 'https://oauth-ipan2.herokuapp.com/google/callback',
        clientID : '147888834235-0nm274au2jl9p20blfedfqb8q63o8rg5.apps.googleusercontent.com',
        clientSecret : 'w_C0BHDE4U1FJJ60ppJBPEQb'
    },()=>{
        //passport callback function
    })

    
)
