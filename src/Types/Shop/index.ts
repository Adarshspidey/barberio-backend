type ShopCreateCommand = {
  name: string;
  phone: string;
  registrationNumber: string;
  ownerName: string;
};

type ShopLocationUpdateCommand = {
  address: string;
  location:{
    lattitude: number;
    longitude: number;
  }
}

export { ShopCreateCommand ,ShopLocationUpdateCommand};
