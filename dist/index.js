"use strict";
// function main() {
//   console.log("Hello world");
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// function hello(name: string) {
//   console.log(`Hello ${name}`);
// }
// hello("world");
//creating objects
//importing the necessary modules
// import "dotenv/config";
const db_1 = __importDefault(require("./drizzle/db"));
//import the client object
const schema_1 = require("./drizzle/schema");
// //querying the database
// const getUsers = async (): Promise<TSUser[] | null> => {
//   return await db.query.UserTable.findMany();
// };
// const getUserById = async (id: number): Promise<TSUser | null> => {
//   return await db.query.UserTable.findOne({
//     where: {
//       id: eq(id),
//     },
//   });
// }
//query 2
const getProfiles = async () => {
    return await db_1.default.select().from(schema_1.ProfileTable).execute();
};
//inserting data
// const createUserProfile = async (user: TIUser, profile: TIProfile) => {
//   await db
//     .insert(ProfilesTable)
//     .values({
//       userId: user.userId,
//       bio: user.bio,
//     })
//     .returning()
//     .execute();
// };
