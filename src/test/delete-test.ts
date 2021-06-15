import { connect } from "../mongodb/connect";

const deleteTest = async () => {
  let connection: any;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personCollection = await db.collection("persons");
    await personCollection.insertMany([
      { name: "OH", age: 31 },
      { name: "Dong", age: 30 },
      { name: "Woong", age: 29 },
    ]);

    let result = await personCollection.deleteMany({});
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.close();
  }
};

deleteTest();
