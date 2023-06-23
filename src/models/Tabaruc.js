const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TabrucSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Tabaruce: {
      type: String,
      required: true,
    },
    Id: {
      type: String,
      required: true,
    },
    Lacagta: {
      type: Number,
      required: true,
    },
    PymentType: {
      type: String,
      required: true,
    },
    Lanbar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const nextTabaruc =
  mongoose.models.nextTabaruc || mongoose.model("nextTabaruc", TabrucSchema);
