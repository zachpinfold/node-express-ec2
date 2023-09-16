import express from "express"

const app = express()

app.listen(80, () => console.log("running on port 80"))

app.get("/", (req, res) => res.json("My API running :)"))