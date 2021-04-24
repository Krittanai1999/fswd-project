import {CustomerTC} from "../../models";

export const customer = CustomerTC.getResolver("findOne")
export const customers = CustomerTC.getResolver("findMany");
