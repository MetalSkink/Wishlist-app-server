import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    wallpaper: String,
    productos: [{
      ref: "Producto",
      type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Wishlist', wishlistSchema);