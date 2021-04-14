import { Connection, createConnection } from "typeorm";

let connection: Connection;

export const initConnection = async () => {
  try {
    connection = await createConnection({
      type: "mysql",
      url: <string>process.env.USERS_SERVICE_DB_URL,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getConnection = () => connection;

export default getConnection;
