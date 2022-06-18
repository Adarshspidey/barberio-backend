import { generateId } from "../../Utils/Generator";
import { ShopCreateCommand ,ShopLocationUpdateCommand} from "../../Types/Shop";
import shop from "../Schemas/shop";
import Shop from "../Schemas/shop";

const createShop = async(data: ShopCreateCommand) => {
  const id = generateId();
  const result = await Shop.create({
    shopId: id,
    ...data
  });
  if (result) return true;
  return false;
};


const addLocation = async(data:ShopLocationUpdateCommand,shopId:string)=>{
  const result = await Shop.findOneAndUpdate({shopId},data);
  if (result) return true;
  return false;
}

const addCoverImage = async(data:string,shopId:string)=>{
  const result = await Shop.findOneAndUpdate({shopId},{coverPictures:[data]});
  if (result) return true;
  return false;
}
const addLogo = async(data:string,shopId:string)=>{
  const result = await shop.findOneAndUpdate({shopId},{logos:[data]});
  if(result) return true;
  return false;
}

const addImages = async(data:[string],shopId:string)=>{
  const result = await Shop.findOneAndUpdate({shopId},data);
  if (result) return true;
  return false;
}

const getShopByPhone = async (phone:string) =>{
  const result = await Shop.findOne({phone});
  if(!result) return null
  return result;
}

export { createShop, getShopByPhone,addLocation, addCoverImage, addLogo, addImages};
