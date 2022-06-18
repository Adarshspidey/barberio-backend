import { generateId } from '../../Utils/Generator';
import Services from '../Schemas/services'
import {ServiceCreateCommand} from '../../Types/Service';
const createService = async(data: ServiceCreateCommand,shopId:string) => {
    const id = generateId();
    const result = await Services.create({
      serviceId: id,
      shopId,
      ...data
    });
    if (result) return true;
    return false;
  };
  export {createService }