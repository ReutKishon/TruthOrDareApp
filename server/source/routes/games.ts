import express from "express";
import controller from "../controllers/games";
const router = express.Router();

router.put("/Join/:code", controller.addPlayer);
router.post("/Start", controller.addGame);

export = router;
