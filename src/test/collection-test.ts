import { connect } from "./../mongodb/connect";

const makeCollectionTest = async () => {
  let connection: any;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personCollection = await db.collection("persons");
    const addressCollection = await db.collection("addresses");
    console.log(personCollection, addressCollection);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.close();
  }
};

makeCollectionTest();
