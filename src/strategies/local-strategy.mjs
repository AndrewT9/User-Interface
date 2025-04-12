import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongoose/schemas/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";


passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    
	done(null, user._id.toString());
});

passport.deserializeUser(async (id, done) => {
	try {
        console.log('id-1', id);
        
		const findUser = await User.findById(id);
		if (!findUser) throw new Error("User Not Found");
		done(null, findUser);
	} catch (err) {
		done(err, null);
	}
});

export default passport.use(
	new Strategy(async (username, password, done) => {
		try {
			const findUser = await User.findOne({ username });
			if (!findUser) throw new Error("User not found");
			if (!comparePassword(password, findUser.password))
				throw new Error("Bad Credentials");
			done(null, findUser);
		} catch (err) {
			done(err, null);
		}
	})
);