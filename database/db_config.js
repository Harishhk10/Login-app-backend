const mongoose = require("mongoose");
const _env = require("dotenv").config();
const env = process.env;

const dbConnection = async () => {
  mongoose.connection.setMaxListeners(15);

  try {
    const connection = await mongoose.connect(env.MONGODB_URL, {
     
      ssl: true,
    });
    const dbName = connection.connections[0].name;

    return dbName;
  } catch (error) {
    console.error("db is not connected ", error);
    throw error;
  }
};

console.log(dbConnection(),'chchh');


module.exports = { dbConnection };
