import { connect } from "./../mongodb/connect";

const findDocumentTest = async () => {
  let connection, cursor: any;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personCollection = await db.collection("persons");

    cursor = await personCollection.find({ name: "Woong" });
    const foundPerson = await cursor.toArray();

    const _id = foundPerson[0]._id;
    const result = await personCollection.findOne({ _id });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.close();
  }
};

findDocumentTest();
