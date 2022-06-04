import { ShopCreateCommand } from "../../Types/Shop";
import Shop from "../Schemas/shop";

const createShop = async(data: ShopCreateCommand) => {
  const result = await Shop.create(data);
  if (result) return true;
  return false;
};

const getShopByPhone = async (phone:string) =>{
  const shop = await Shop.findOne({phone});
  if(!shop) return false
  return shop;
}

export { createShop, getShopByPhone };
