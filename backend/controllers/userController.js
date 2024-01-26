import userModel from "../models/User.js";
import bcrypt from 'bcrypt';
// user Register
export const userRegister = async (req, res) =>{
    try{
      const {firstName, email, password, secondName} = req.body;
      if (!firstName || !email || !password || !secondName) {
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
        secondName: secondName,
        email: email,
        password: hashPassword,
        userCategory: req.body.userCategory
     })
     const newUser = await user.save();
     return res.status(200).json({ newUser});

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
  return res.status(200).json({ message: "Login successful" });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}