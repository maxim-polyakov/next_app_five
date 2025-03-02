import { pgTable, serial, varchar, boolean, timestamp, integer, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    message: varchar("first_name").notNull(),
})