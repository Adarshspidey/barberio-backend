import { JoiFileUrls, JoiRequiredAddress, JoiRequiredFileUrl, JoiRequiredName, JoiRequiredPhone, JoiRequiredRegistrNumber } from "../Common";

const shop = {
    JoiShopName: JoiRequiredName("Shop Name"),
    JoiOwnerName: JoiRequiredName("Owner Name"),
    JoiShopPhone : JoiRequiredPhone("Shop Phone Number"),
    JoiShopRegisterNumber : JoiRequiredRegistrNumber("Shop Register Number"),
    JoiShopAddress: JoiRequiredAddress("Shop address"),
    JoiShopCoveImageurl: JoiRequiredFileUrl("Shop Cover Image URL"),
    JoiShopLogoImageurl: JoiRequiredFileUrl( "Shop Logo "),
    JoiShopImagesUrls: JoiFileUrls("Shop image Urls")

}


export default shop;