const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        productImage: {
            type: String,
            required: true,
        },
        productDesc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        star: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        review: {
            type: [Object],
        },
        category: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const product = model("product", productSchema);

module.exports = product;
