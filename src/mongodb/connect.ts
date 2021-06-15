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
