"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
//creating objects
//importing the necessary modules
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
// import { drizzle } from "drizzle-orm/node-postgres";
//import the client object
const pg_1 = require("pg");
//create a new client object
exports.client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL, // or your connection string get the database url from the .env file
});
//main function
const main = async () => {
    await exports.client.connect();
    // await drizzle(client).createSchema();
    // await client.end();
};
exports.default = (0, node_postgres_1.drizzle)(exports.client); //export the drizzle object
main().catch(console.error); // run the main function and catch any errors
