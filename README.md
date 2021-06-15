## Connect

src/mongodb/connect.ts

```javascript
import MongoClient from "mongodb";

export type PromiseMongoClient = Promise<MongoClient.MongoClient>;

export const connect = (
  mongoUrl: string = "mongodb://localhost:27017"
): PromiseMongoClient => {
  return MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
```

## Connect Test

src/test/connect-test.ts

```javascript
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
```

## Add to Data in "ch-12" base

src/test/insert-document-test.ts

```javascript
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
```

## Find data

src/test/find-test.ts

```javascript
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
```
