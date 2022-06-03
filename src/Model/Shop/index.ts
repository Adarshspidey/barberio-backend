import { ShopCreateCommand } from "../../Types/Shop";
import Shop from "../Schemas/shop";

const createShop = (data: ShopCreateCommand) => {
  const result = Shop.create(data);
  if (result) return true;
  return false;
};

export { createShop };
