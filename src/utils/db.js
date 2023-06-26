import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const conectdb = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};

export default conectdb;
