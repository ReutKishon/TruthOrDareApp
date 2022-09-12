import { Sequelize } from "sequelize";

const sequelize = new Sequelize("appDB", "root", "Rk@9352221", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
