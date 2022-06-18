import { JoiRequiredDate, JoiSeatNumber, JoiTime } from "../Common";

const Bookings = {
    JoiBookingDate:JoiRequiredDate("Booking Date"),
    JoiBookingTime:JoiTime("Booking Start Time"),
    JoiBookingSeatNumber:JoiSeatNumber("Seat Number")
}

export default Bookings;