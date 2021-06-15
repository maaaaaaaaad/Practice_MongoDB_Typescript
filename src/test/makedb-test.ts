import { connect } from "./../mongodb/connect";
const connectTest = async () => {
  let connection: any;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    console.log(db);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.close();
  }
};

connectTest();
