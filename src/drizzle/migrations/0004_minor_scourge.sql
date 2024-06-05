DO $$ BEGIN
 CREATE TYPE "public"."restaurant_owner role" AS ENUM('OWNER', 'MANAGER', 'STAFF', 'DELIVERY');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
