import express from "express";

const app = express();

app.listen(8080, () => console.log("Five things I love about this place"));

app.get("/", (req, res) => res.json("My API running :)"));
