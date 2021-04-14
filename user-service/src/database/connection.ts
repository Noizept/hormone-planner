import { Connection, createConnection } from "typeorm";

let connection: Connection;

export const initConnection = async () => {
  try {
    connection = await createConnection();
  } catch (error) {
    throw new Error(error);
  }
};

const getConnection = () => connection;

export default getConnection;
