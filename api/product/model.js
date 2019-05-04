const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const feedbackModel = new Schema(
    {
      createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
      content: { type: String, required: true }
    },
    { timestamps: { createdAt: "createdAt" } }
  );


const productModel = new Schema({
    title: {type: String, require: true},
    discription: {type: String, require: true}, 
    imageUrl: {type: String, require: true},
    price: {type: Number, require: true, default: 0},
    category: {type: String, require: true, enum: ["newBorn", "kid", "teenager", "adult"]},
    stock: {type:Number, required: true, default: 0},
    feedback: {type: [feedbackModel], default: []}
})

module.exports = model("products", productModel);