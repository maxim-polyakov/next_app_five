import { pgTable, varchar} from "drizzle-orm/pg-core"

export const messages = pgTable("messages", {
    message: varchar("message").notNull(),
})