import express from "express";

const app = express();

app.listen(8080, () => console.log("runniwedng on port 808e0"));

app.get("/", (req, res) => res.json("My API running :)"));
