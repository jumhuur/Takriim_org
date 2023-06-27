import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const conectdb = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(
      "mongodb+srv://jumhuur:jumhuur0404@cluster0.uctjw.mongodb.net/ixsaan?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log(err);
  }
};

export default conectdb;
