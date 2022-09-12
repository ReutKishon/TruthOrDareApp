import express from "express";

import { addPlayer, removePlayer, createGame } from "../controllers/auth.js";

const router = express.Router();

router.post("/addPlayer", addPlayer);

router.post("/removePlayer", removePlayer);

router.get("/createGame", createGame);

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
});

export default router;
