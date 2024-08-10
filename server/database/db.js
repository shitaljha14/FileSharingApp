import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URI =
    "mongodb+srv://shishujsrsidh:RhjJkOXk74POb9eT@cluster0.ohlnb4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Databases connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};
export default DBConnection;
