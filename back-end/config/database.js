import sequelize from "sequelize";

const db = new sequelize('auth_db','root','',{
    host : "localhost",
    dialect: "mysql"
});

export default db;