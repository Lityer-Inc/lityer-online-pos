import userModel from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
// user Register
export const userRegister = async (req, res) =>{
    try{
      const {firstName, email, password, lastName} = req.body;
      if (!firstName || !email || !password || !lastName) {
            return res.status(400).json({ error: "Required fields are missing." });
          }
    //  check if user is already exist
     const existingUserWithEmail = await userModel.findOne({
            email: email,
          });
    if (existingUserWithEmail) {
            return res
              .status(400)
              .json({ error: "User with the same email already exists." });
          }
     const hashPassword = await bcrypt.hash(password, 10)     

     const user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        userCategory: req.body.userCategory
     })
     const newUser = await user.save();
    //  JWT
    const token = jwt.sign({
      email: newUser.email, id: newUser._id, userCategory: newUser.userCategory}, process.env.ACCESS_TOKEN,
      { expiresIn: "4d" })
     return res.status(200).json({ newUser, token});

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
}

export const userLogin = async (req, res)=>{
  const {email, password} = req.body;
  try{
   if(!email || !password){
    return res.status(400).json({ error: "Required fields are missing." })
   }
   const user = await userModel.findOne({ email });
  //  check if user is exist or not:
  if(!user){
    return res.status(400).json({error: "User not found"})
  }

   // Compare Secured (hashed) Password with provided password
   const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(401).json({ error: "Invalid password" });
  }
  // JWT
  const token = jwt.sign({email: user.email, id: user._id},  process.env.ACCESS_TOKEN,
    { expiresIn: "4d" })
  return res.status(200).json({token, message: "Login successful" });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// userLogoutController
export const userLogout = (req, res) => {
  try {
    // after log out successfully
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};