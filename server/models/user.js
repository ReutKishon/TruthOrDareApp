import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
  },
});

export default User;
