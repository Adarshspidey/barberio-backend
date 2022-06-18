import { generateId } from '../../Utils/Generator';
import Bookings from '../Schemas/services'
import { BookingCreateCommand } from '../../Types/Booking';
const createBooking = async(data: BookingCreateCommand,shopId:string) => {
    const id = generateId();
    const result = await Bookings.create({
      BookingId: id,
      shopId,
      ...data
    });
    if (result) return true;
    return false;
  };
  export {createBooking }