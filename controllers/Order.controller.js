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
    const { orderId } = req.params || {};
    const order = await OrderModel.findById(orderId);
    res.status(200).json(order);
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

        res.status(201).json({
            success: {
                message: "Order success",
            },
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

// order edit by Status
async function editOrder(req, res, next) {
    try {
        const { orderId } = req.params || {};
        const { status } = req.body
        console.log(req.body)
        const order = await OrderModel.findById(orderId);
        console.log(order)
        order.status = status
        await order.save()

        res.status(200).json({
            order, success: {
                message: "Order update success",
            }
        });


    } catch (error) {
        console.log(error);
        next(error);
    }
}
async function deleteOrder(req, res, next) {
    try {
        const { orderId } = req.params || {};

        const order = await OrderModel.findOne({ _id: orderId });

        await order.deleteOne()

        await OrderModel.findOneAndDelete({ _id: orderId })

        res.status(204).json({
            success: {
                message: "Order delete success",
            }
        });

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