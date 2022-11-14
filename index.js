const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const ordertRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors=require("cors");


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Successfull! "))
    .catch((err) => {
        console.log(err)
    })
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", ordertRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})