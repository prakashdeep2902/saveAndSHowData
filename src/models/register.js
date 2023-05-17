
import mongoose from "mongoose";
const { Schema } = mongoose;

const registerSchema = new Schema({
    
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phone: {
        type: Number,
        required: true,
        unique: true

      }
  
  });
  
  const Register = mongoose.model('Register', registerSchema);
  export default Register; 