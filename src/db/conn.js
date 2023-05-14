import mongoose from "mongoose";
const connectToDatabase = async () => {
    try {
      await mongoose.connect("mongodb+srv://admin:admin@cluster0.0helkkm.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connection successful");
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  
  export default connectToDatabase;