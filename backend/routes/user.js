import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";
import { authentication } from "../middleware/authentication.js";

const userRouter = express.Router();
// Protect the '/jwt' endpoint using the authentication middleware
userRouter.get('/jwt', authentication, (req, res) => {
  // The request is authenticated, you can perform further actions here
  res.status(200).json({ message: 'JWT authentication successful', user: req.decoded });
});
userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin)

export default userRouter;