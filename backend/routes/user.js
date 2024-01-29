import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";
import { authentication } from "../middleware/authentication.js";

const userRouter = express.Router();

userRouter.get('/jwt', authentication)
userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin)

export default userRouter;