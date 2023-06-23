import mongoose from "mongoose";
const { Schema } = mongoose;
const NextUser = new Schema(
  {
    Magac: {
      type: String,
      required: true,
    },
    Lanbar: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("isticmaale", NextUser);
export const isticmaale =
  mongoose.models.isticmaale || mongoose.model("isticmaale", NextUser);
