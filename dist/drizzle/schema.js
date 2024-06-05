"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTable = exports.UserTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.UserTable = (0, pg_core_1.pgTable)("Users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    fullname: (0, pg_core_1.text)("full_name"),
    phone: (0, pg_core_1.varchar)("phone", { length: 11 }),
    address: (0, pg_core_1.text)("address"),
    age: (0, pg_core_1.integer)("age"),
    email: (0, pg_core_1.varchar)("email", { length: 100 }),
    password: (0, pg_core_1.varchar)("password", { length: 100 }),
    created_at: (0, pg_core_1.text)("created_at"),
    updated_at: (0, pg_core_1.text)("updated_at"),
    deleted_at: (0, pg_core_1.text)("deleted_at"),
    is_active: (0, pg_core_1.text)("is_active"),
    is_deleted: (0, pg_core_1.text)("is_deleted"),
    is_admin: (0, pg_core_1.text)("is_admin"),
    score: (0, pg_core_1.integer)("score"),
});
exports.ProfileTable = (0, pg_core_1.pgTable)("profile", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    // user_id: integer("user_id").foreignKey(UserTable.id),
    userId: (0, pg_core_1.integer)("user_id")
        .notNull()
        .references(() => exports.UserTable.id, { onDelete: "cascade" }), //foregn key ref id in users table this is the same as the line above, but with a different syntax
    bio: (0, pg_core_1.text)("bio"),
    created_at: (0, pg_core_1.text)("created_at"),
    updated_at: (0, pg_core_1.text)("updated_at"),
    deleted_at: (0, pg_core_1.text)("deleted_at"),
    is_active: (0, pg_core_1.text)("is_active"),
    is_deleted: (0, pg_core_1.text)("is_deleted"),
    is_admin: (0, pg_core_1.text)("is_admin"),
    score: (0, pg_core_1.integer)("score"),
});
