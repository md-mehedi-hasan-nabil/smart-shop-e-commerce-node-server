const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
    {
        products: [],
        status: {
            type: String,
            default: "pending"
        }
    },
    { timestamps: true }
);

const order = model("order", OrderSchema);

module.exports = order;
