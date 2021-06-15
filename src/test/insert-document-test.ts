import { connect } from "./../mongodb/connect";

const inserDocumentTest = async () => {
  let connection: any;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personCollection = await db.collection("persons");
    const addressCollection = await db.collection("addresses");

    const personData = { name: "Woong", age: 31 };
    let result = await personCollection.insertOne(personData);
    console.log(result);

    const addressData = { email: "integral5137@gmail.com", city: "Seoul" };
    result = await addressCollection.insertOne(addressData);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.close();
  }
};

inserDocumentTest();
