const mongoose = require("mongoose");
const Category = require("../Category/Category");

const postSchema = new mongoose.Schema(
{
    description:{
        type:String,
        required:true,
        trim:true
    },
    image:{
       type:Object,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
    },
    nextEarningDate:{
        type:Date,
        default: () =>
            new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
    },
    thisMonthEarning:{
        type:Number,
        default:0
    },
    totalEarnings:{
        type:Number,
        default:0
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
    },
    viewsCount:{
        type:Number,
        default:0
    },
   likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
   }],
   dislikes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
   }],
   viewers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
   }],
   comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
   }],

   isBlocked:{
    type:Boolean,
    default:false,
   }
},
{
    timestamps:true,
}
);

module.exports  = mongoose.model("Post",postSchema);
