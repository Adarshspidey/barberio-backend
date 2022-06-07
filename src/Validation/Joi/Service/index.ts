import { JoiRate, JoiRequiredDescription, JoiRequiredName, JoiTime } from "../Common";

const Services = {
  JoiServiceName:JoiRequiredName("Service Name"),
  JoiServiceDescription: JoiRequiredDescription("Service Description"),
  JoiServiceTime:JoiTime("Session Time"),
  JoiServiceRate:JoiRate("Service Rate")
}
export default Services;