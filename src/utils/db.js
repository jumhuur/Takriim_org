import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const conectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};

export default conectdb;
