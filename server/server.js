import express from "express";
import cors from "cors";
import { getDiscoverSongs, getMyMusic } from "./songs.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/my", (req, res) => {
    getMyMusic().then(data => {
        res.send(data);
    })
})

app.get("/discover", (req, res) => {
    getDiscoverSongs().then(data => {
        res.send(data);
    })
})


app.listen(3001);