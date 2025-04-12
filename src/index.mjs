import express from "express";
import routers from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import connectDb from "./config/db.mjs";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy.mjs";
import mongoose from "mongoose";

const app = express();

// Connect to DB
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(
    session({
        secret: "Andriy dev",
        saveUninitialized: true,
        resave: true,
        cookie: {
            maxAge: 60000 * 60,
        },
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
        }),
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routers);

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
    res.send(200);
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id);

    req.session.visited = true;
    res.cookie("hello", " hello", { maxAge: 60000 });
    res.status(201).send({ msg: "Hello World" });
});

// app.post("/api/auth", (req, res) => {
//     const { username, password } = req.body;

//     const findUser = mockUsers.find((user) => user.username === username);

//     console.log("findUser", findUser);

//     if (!findUser || findUser.password !== password)
//         return res.status(401).send({ msg: "BAD CREDENTIALS" });

//     req.session.user = findUser;
//     return res.status(200).send(findUser);
// });

app.get("/api/auth/status", (req, res) => {
    // return req.session.user
    //     ? res.status(200).send(req.session.user)
    //     : res.status(401).send({ msg: "Not Authenticated" });
    console.log("Inside /auth/status", req.user);
    return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post("/api/auth/logout", (req, res) => {
    if (!req.user) return res.sendStatus(401);
    req.logout((err) => {
        if (err) return res.sendStatus(400);
        res.send(200);
    });
});

app.post("/api/cart", (req, res) => {
    if (!req.session.user) return res.sendStatus(401);
    const { body: item } = req;

    const { cart } = req.session;
    if (cart) {
        cart.push(item);
    } else {
        req.session.cart = [item];
    }

    return res.status(201).send(item);
});

app.get("/api/cart", (req, res) => {
    if (!req.session.user) return res.sendStatus(401);
    return res.send(req.session.cart ?? []);
});

app.listen(PORT, () => {
    console.log("Running on Port 3000");
});
