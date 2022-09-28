import express from "express";
import controller from "../controllers/games";
const router = express.Router();

router.get("/Main/:id", controller.getGame);
router.put("/Join/:code", controller.addPlayer);
router.put("/Main/:id", controller.deletePlayer);
router.delete("/Main/:id", controller.deleteGame);
router.post("/Start", controller.addGame);

export = router;
