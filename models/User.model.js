const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        displayName: {
            type: String,
            required: true,
        },
        photoURL: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user"
        },
        order: {
            type: [Schema.Types.ObjectId],
            ref: 'order'
        }
    },
    { timestamps: true }
);

const User = model("user", UserSchema);

module.exports = User;
