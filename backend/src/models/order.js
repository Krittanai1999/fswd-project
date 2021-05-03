import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const StatusType = {
    INCOMPLETE: "INCOMPLETE",
    COMPLETED: "COMPLETED",
    CANCEL: "CANCEL",
};

const OrderSchema = new Schema({
    userID: {
        type: String,
        required: true,
        index: true,
        ref: "User",
    },
    promotionID: {
        type: String,
        index: true,
        ref: "Promotion",
    },
    productsID: {
        type: String,
        index: true,
        ref: "Product",
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: Object.keys(StatusType),
        default: StatusType.INCOMPLETE,
    },

});

export const OrderModel = mongoose.model("Order", OrderSchema);

export const OrderTC = composeWithMongoose(OrderModel);

export default OrderModel;