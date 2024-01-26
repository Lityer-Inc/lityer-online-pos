import userModel from "../models/User.js";

// user Register
export const userRegister = async (req, res) =>{
    try{
      if (!req.body.firstName || !req.body.email || !req.body.password || !req.body.secondName) {
            return res.status(400).json({ error: "Required fields are missing." });
          }
    //  check if user is already exist
     const existingUserWithEmail = await userModel.findOne({
            email: req.body.email,
          });
    if (existingUserWithEmail) {
            return res
              .status(400)
              .json({ error: "User with the same email already exists." });
          }

     const user = new userModel({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        password: req.body.password,
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