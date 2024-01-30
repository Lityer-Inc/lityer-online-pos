import express from "express"
import { upload } from "../middleware/multer.js";
import { AddStore, addStoreProduct, deleteProduct, deleteStore, updateProductController, updateStoreController } from "../controllers/storeController.js";
import { authentication } from "../middleware/authentication.js";

const storeRouter = express.Router();

storeRouter.post("/", upload.single('avatar'), AddStore);// add retailer auth. after done with api.this adds the store to the mongoDB 
storeRouter.post("/:id/products", authentication, upload.single('image'), addStoreProduct);// adds the product to the store as per the store_id
storeRouter.delete("/:storeId", authentication, deleteStore);//deletes the whole store along with the products
storeRouter.delete("/:storeId/products/:productId", authentication, deleteProduct);//deletes a specific product of a specific store
storeRouter.put("/:storeId", authentication, upload.single('avatar'), updateStoreController);//updates the details of the store
storeRouter.put("/:storeId/products/:productId", authentication, upload.single('image'), updateProductController);//updates a specific product within a specific store


export default storeRouter;