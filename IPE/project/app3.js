const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", (req, res) => {

    res.cookie("registered", req.body, {
        maxAge: 15000
    });

    res.send(`
        Registration Successful<br><br>

        <a href="/details">View Details</a>
    `);

});

app.get("/details", (req, res) => {

    const user = req.cookies.registered;

    if (!user) {
        return res.send("Cookie Expired");
    }

    res.send(`
        Name : ${user.name}<br>
        Contact : ${user.contact}<br>
        Email : ${user.email}<br>
        Address : ${user.address}<br>
        Gender : ${user.gender}<br>
        DOB : ${user.dob}<br><br>

        <a href="/logout">Logout</a>
    `);

});

app.get("/logout", (req, res) => {

    res.clearCookie("registered");

    res.redirect("/");

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});



// app.use(express.urlencoded({extended:true}));

// app.use(cookieParser());

// res.cookie("registered", req.body,{maxAge:15000});

// req.cookies.registered;

// res.clearCookie("registered");