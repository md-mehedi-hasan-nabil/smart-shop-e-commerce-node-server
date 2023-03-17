const OrderModel = require("../models/Order.model");
const UserModel = require("../models/User.model");

async function getOrders(req, res, next) {
    try {
        const orders = await OrderModel.find({});
        res.status(200).json(orders);
    } catch (error) {

    }
}
async function getOrder(req, res, next) {

}
async function addOrder(req, res, next) {
    try {
        const { products, userId } = req.body;

        const newOrder = new OrderModel({
            products // productIds is array
        });

        await newOrder.save();

        const user = await UserModel.findById(userId);
        user.order.push(newOrder?._id);
        await user.save();

        res.status(200).json({
            success: {
                message: "Order success",
            },
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}
async function editOrder(req, res, next) {
    try {

    } catch (error) {
        console.log(error);
        next(error);
    }
}
async function deleteOrder(req, res, next) {
    try {

    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    getOrders,
    getOrder,
    addOrder,
    editOrder,
    deleteOrder,
}