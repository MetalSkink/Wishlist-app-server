import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    productUrl: String,
    imgUrl: String,
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Product', productSchema);