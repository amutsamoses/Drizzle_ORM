import "dotenv/config";

import { eq, gt, like } from "drizzle-orm";

import db from "./drizzle/db";
import {
  Restaurant,
  City,
  State,
  Address,
  RestaurantOwner,
  Users,
  MenuItem,
  Category,
  Orders,
  Driver,
  OrderMenuItem,
  OrderStatus,
  StatusCatalog,
  Comment,
} from "./drizzle/schema";
import {
  TSUser,
  TSRestaurant,
  TSCity,
  TSMenuItem,
  TSOrder,
  TSOrderMenuItem,
  TSComment,
  TSOrderStatus,
  TSStatusCatalog,
  TSRestaurantOwner,
  TSAddress,
  TSState,
  TSDriver,
  TSCategory,
  TIUser,
  TIRestaurant,
  TICity,
  TIAddress,
  TIState,
  TIRestaurantOwner,
  TIMenuItem,
  TICategory,
  TIOrder,
  TIDriver,
  TIOrderMenuItem,
  TIOrderStatus,
  TIStatusCatalog,
  TIComment,
} from "./drizzle/schema";

import { restaurantRelations } from "./drizzle/schema";

const getMenuItemsWithOrders = async () => {
  return await db.query.MenuItem.findMany({
    with: {
      orderMenuItems: {
        with: {
          order: {
            columns: { id: true, price: true },
          },
        },
      },
    },
  });
};

const getUsersWithPostsAndProfiles = async () => {
  return await db.query.Orders.findMany({
    with: { orderMenuItems: true },
  });
};
async function main() {
  // console.log(await getMenuItemsWithOrders());
  console.log(await getUsersWithPostsAndProfiles());
}

main().catch(console.error);
