const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        img: { type: String },

    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);