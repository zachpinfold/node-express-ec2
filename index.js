import express from "express";

const app = express();

app.listen(8080, () => console.log("runniwedng on port 8080"));

app.get("/", (req, res) => res.json("My API running :)"));
