import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  wishlist: {
    ref: "Role",
    type: mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps:true,
  versionKey: false
});

export default mongoose.model('User', UserSchema);
