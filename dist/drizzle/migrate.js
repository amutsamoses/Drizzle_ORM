"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//migration code
//
require("dotenv/config");
// import { drizzle } from "drizzle-orm/node-postgres";
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
// import { db } from "./db";
const db_1 = __importStar(require("./db"));
async function migration() {
    console.log("=======Migrating Database=======");
    // await db.createSchema();
    await (0, migrator_1.migrate)(db_1.default, {
        migrationsFolder: __dirname + "./src/drizzle/migrations",
    });
    await db_1.client.end();
    console.log("=======Migration Complete=======");
    process.exit(0);
}
// run the migration function and catch any errors
migration().catch((err) => {
    console.error(err);
    process.exit(1);
}); // run the migration function and catch any errors
