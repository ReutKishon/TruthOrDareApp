import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

const Game = sequelize.define("games", {
  gameCode: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  numberOfPlayers: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gameManager: {
    type: Sequelize.JSON,
  },
  players: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});

export default Game;
