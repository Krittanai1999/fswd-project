import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  nameAddress: { type: String, require: true },
  address: { type: String, require: true },
  email: { type: String, require: true },
  tel: { type: String, require: true },
  authorId: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
});

export const CustomerModel = mongoose.model("Customer", CustomerSchema);

export const CustomerTC = composeWithMongoose(CustomerModel);

export default CustomerModel;
