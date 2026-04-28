const express = require("express");
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
// Homepage with form
app.get("/", (req, res) => {
res.send(`
<h1>User Form</h1>
<h3>Create User</h3>
<form action="/user" method="POST">
<input type="text" name="name" placeholder="Enter name" />
<button type="submit">Create</button>
</form>
`);
});
// POST request
app.post("/user", (req, res) => {
const name = req.body.name;
res.send("User created with name " + name);
});
// Start server
app.listen(5504, () => {
console.log("Server started on port 5504");
});