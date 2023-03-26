const UserModel = require("../models/User.model");

// get all users
async function getUsers(req, res, next) {
    try {
        const users = await UserModel.find({}).populate([
            "order",
        ]);
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function makeAdmin(req, res, next) {
    try {
        const { email } = req.params || {};
        const updateUser = await UserModel.findOneAndUpdate({ email }, {
            role: "admin"
        }, {
            new: true
        });


        res.status(201).json({
            message: "User make admin successfull.",
            user: updateUser,
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUserById(req, res, next) {
    try {
        const { userId } = req.params || {};
        const user = await UserModel.findById({ _id: userId });
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUserByEmail(req, res, next) {
    try {
        const { email } = req.params || {};
        const user = await UserModel.findOne({ email }).populate([
            "order",
        ]);;
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function addUser(req, res, next) {
    try {
        const { displayName, email, photoURL } = req.body;

        const user = await UserModel.findOne({ email });

        console.log(user)

        if (user?._id) {
            res.status(409).json({
                error: {
                    message: "User already exists.",
                    user
                },
            });
        } else {
            const newUser = new UserModel({
                displayName, email, photoURL
            })

            await newUser.save()

            res.status(201).json({
                success: {
                    message: "Add new user",
                },
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        res.status(200).json({
            message: "Cann't delete user.",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function editUser(req, res, next) {
    try {
        const { userId } = req.params || {};
        const updateUser = await UserModel.findByIdAndUpdate(
            userId,
            { $set: req.body },
            { new: true }
        );

        res.status(201).json({
            message: "User information update successfull.",
            user: updateUser,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    getUserById, getUserByEmail, getUsers, addUser, deleteUser, editUser, makeAdmin
};
