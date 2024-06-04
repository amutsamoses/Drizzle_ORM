import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const UserTable = pgTable("Users", {
  id: serial("id").primaryKey(),
  fullname: text("full_name"),
  phone: varchar("phone", { length: 11 }),
  address: text("address"),
  age: integer("age"),
  email: varchar("email", { length: 100 }),
  password: varchar("password", { length: 100 }),
  created_at: text("created_at"),
  updated_at: text("updated_at"),
  deleted_at: text("deleted_at"),
  is_active: text("is_active"),
  is_deleted: text("is_deleted"),
  is_admin: text("is_admin"),
  score: integer("score"),
});

export const ProfileTable = pgTable("profile", {
  id: serial("id").primaryKey(),
  // user_id: integer("user_id").foreignKey(UserTable.id),
  userId: integer("user_id")
    .notNull()
    .references(() => UserTable.id, { onDelete: "cascade" }), //foregn key ref id in users table this is the same as the line above, but with a different syntax
  bio: text("bio"),
  created_at: text("created_at"),
  updated_at: text("updated_at"),
  deleted_at: text("deleted_at"),
  is_active: text("is_active"),
  is_deleted: text("is_deleted"),
  is_admin: text("is_admin"),
  score: integer("score"),
});

//relations
export type TIUser = typeof UserTable.$inferInsert;
// export type TIProfile = typeof ProfileTable.$inferInsert;
export type TSUser = typeof UserTable.$inferSelect;
export type TIProfile = typeof ProfileTable.$inferInsert;
export type TSProfile = typeof ProfileTable.$inferSelect;
