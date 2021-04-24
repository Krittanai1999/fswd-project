import { CustomerTC } from "../../models";

export const createCustomer = CustomerTC.getResolver("createOne");
export const updateCustomerById = CustomerTC.getResolver("updateById");
export const removeCustomerById = CustomerTC.getResolver("removeById");
