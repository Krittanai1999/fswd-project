import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PromotionSchema = new Schema({
  name: { type: String, require: true }, 
  amount:{type: String, require:true}, 
  discount: { type: Number, require: true }, 
  productId: {
    type: String,
    require: true,
    index: true,
    default: null,
    ref: "Product",
  },
  timestamp: { type: Date, default: Date.now },
});

const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const PromotionModel = mongoose.model("Promotion", PromotionSchema);

export const PromotionTC = composeWithMongoose(PromotionModel, baseOptions);

export default PromotionModel;
