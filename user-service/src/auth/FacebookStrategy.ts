import FacebookStrategy from "passport-facebook";

const Facebook = new FacebookStrategy.Strategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID || "",
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || "",
    profileFields: ["email", "name"],
  },
  function (accessToken, refreshToken, profile, done) {
    const { email, first_name, last_name } = profile._json;
    console.log(profile._json);
    done(null);
  }
);

export default Facebook;
