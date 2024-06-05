import "dotenv/config";
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

// Query to get all users
const getUsers = async (): Promise<TSUser[]> => {
  return await db.query.Users.findMany();
};

// Query to get a restaurant with its city by restaurant ID
const getRestaurantWithCity = async (id: string) => {
  return await db.query.Restaurant.findFirst({
    where: { id: id },
    with: {
      city: {
        columns: { name: true },
      },
    },
  });
};

// Query to get all restaurants with their cities
const getRestaurantsWithCities = async () => {
  return await db.query.Restaurant.findMany({
    with: {
      city: {
        columns: { name: true },
      },
    },
  });
};

// Query to get a city with its restaurants by city ID
const getCityWithRestaurants = async (id: string) => {
  return await db.query.City.findFirst({
    where: { id: id },
    with: {
      restaurants: {
        columns: { name: true },
      },
    },
  });
};

const getCitiesWithRestaurants = async () => {
  return await db.query.City.findMany({
    with: {
      restaurants: {
        columns: { name: true },
      },
    },
  });
};

// 1-n relationship: Restaurant with Menu Items
const getRestaurantWithMenuItems = async (id: number) => {
  return await db.query.Restaurant.findFirst({
    where: { id: id },
    with: {
      menuItems: {
        columns: { name: true, price: true },
      },
    },
  });
};

const getRestaurantsWithMenuItems = async () => {
  return await db.query.Restaurant.findMany({
    with: {
      menuItems: {
        columns: { name: true, price: true },
      },
    },
  });
};

// n-n relationship: Orders with Menu Items via OrderMenuItem
const getOrderWithMenuItems = async (id: number) => {
  return await db.query.Orders.findFirst({
    where: { id: id },
    with: {
      orderMenuItems: {
        with: {
          menuItem: {
            columns: { name: true, price: true },
          },
        },
      },
    },
  });
};

const getOrdersWithMenuItems = async () => {
  return await db.query.Orders.findMany({
    with: {
      orderMenuItems: {
        with: {
          menuItem: {
            columns: { name: true, price: true },
          },
        },
      },
    },
  });
};

// n-n relationship: Menu Items with Orders via OrderMenuItem
const getMenuItemWithOrders = async (id: number) => {
  return await db.query.MenuItem.findFirst({
    where: { id: id },
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

async function main() {
  // Example usage of the queries
  // console.log(await getUsers());
  // console.log(await getRestaurantWithCity('some-uuid-value'))
  // const restaurantsWithCities = await getRestaurantsWithCities();
  // console.log("Restaurants with Cities:", restaurantsWithCities);
  // console.log("Cities with Restaurants:", getCitiesWithRestaurants());
  // console.log("Restaurants with Menu Items:", await getRestaurantsWithMenuItems());
}
main();
