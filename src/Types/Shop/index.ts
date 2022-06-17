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

type SheduleWorkTimeCommand = {
  day: string;
  startTime: number;
  endTime: number;
}
export { ShopCreateCommand ,ShopLocationUpdateCommand,SheduleWorkTimeCommand};
