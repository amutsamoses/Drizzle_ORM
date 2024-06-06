ALTER TABLE "order_menu_item" ADD COLUMN "quality" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "quantity";