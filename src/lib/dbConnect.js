import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionName = {
  cars: "cars",
  userCollections: "users",
  bookingCollection: "booking",
};

// export default function dbConnect(collectionName) {
//   const client = new MongoClient(process.env.MONGO_URI, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   return client.db("carDB").collection(collectionName);
// }

export default function dbConnect(collectionName) {
  const client = new MongoClient(process.env.MONGO_URI);
  return client.db("cardDB").collection(collectionName);
}
