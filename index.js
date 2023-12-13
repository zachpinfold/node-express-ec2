import express from "express";

const app = express();

app.listen(8080, () => console.log("running on port 80080"));

app.get("/", (req, res) => res.json("My API running :)"));
