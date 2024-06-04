//creating objects
//importing the necessary modules
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
// import { drizzle } from "drizzle-orm/node-postgres";

//import the client object
import { Client } from "pg";

//create a new client object
export const client = new Client({
  connectionString: process.env.DATABASE_URL as string, // or your connection string get the database url from the .env file
});

//main function
const main = async () => {
  await client.connect();
  // await drizzle(client).createSchema();
  // await client.end();
};

export default drizzle(client); //export the drizzle object

main().catch(console.error); // run the main function and catch any errors
