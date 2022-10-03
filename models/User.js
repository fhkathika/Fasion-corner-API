const mongoose=require("mogoose");
const { boolean } = require("webidl-conversions");

const userSchema=new mongoose.Schema(
    {
        username:{type:String,required:true,unique:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,required:true},
        isAdmin:{
            type:boolean,
            default:false,
        },
        

    },
    {timestamps:true}
);

module.export=mongoose.module("User",userSchema);