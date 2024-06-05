ALTER TABLE "profile" ALTER COLUMN "bio" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "Users" ALTER COLUMN "address" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "updated_at";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "deleted_at";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "is_active";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "is_deleted";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "is_admin";--> statement-breakpoint
ALTER TABLE "profile" DROP COLUMN IF EXISTS "score";