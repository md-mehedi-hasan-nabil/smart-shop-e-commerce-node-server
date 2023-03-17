const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
    {
        products: []
    },
    { timestamps: true }
);

const order = model("order", OrderSchema);

module.exports = order;
