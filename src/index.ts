// function main() {
//   console.log("Hello world");
// }

// function hello(name: string) {
//   console.log(`Hello ${name}`);
// }

// hello("world");

//creating objects
//importing the necessary modules
// import "dotenv/config";
import db from "./drizzle/db";

//import the client object
import { UserTable, ProfileTable } from "./drizzle/schema";

import { eq, gt, like, not, or, and, lt, gte, lte } from "drizzle-orm";

import { TIUser, TSUser, TIProfile, TSProfile } from "./drizzle/schema";

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
const getProfiles = async (): Promise<TSProfile[] | null> => {
  return await db.select().from(ProfileTable).execute();
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
