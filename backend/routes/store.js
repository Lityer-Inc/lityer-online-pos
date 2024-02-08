import express from "express"
import { upload } from "../middleware/multer.js";
import { AddStore, addStoreProduct, deleteProduct, deleteStore, getSpecificStore, getStoresWithUserId, updateProductController, updateStoreController } from "../controllers/storeController.js";
import { authentication } from "../middleware/authentication.js";

export const storeRouter = express.Router();

storeRouter.post("/:retailerId/stores", authentication, upload.single('avatar'), AddStore); // Add a new store

storeRouter.post("/stores/:storeId/products", upload.single('img'), addStoreProduct);// adds the product to the store as per the store_id
storeRouter.delete("/stores/:storeId", authentication, deleteStore);//deletes the whole store along with the products
storeRouter.delete("/:storeId/products/:productId", authentication, deleteProduct);//deletes a specific product of a specific store
storeRouter.put("/:storeId", authentication, upload.single('avatar'), updateStoreController);//updates the details of the store
storeRouter.put("/:storeId/products/:productId", authentication, upload.single('image'), updateProductController);//updates a specific product within a specific store

// Get details of a specific store
storeRouter.get("/:retailerId/stores/:storeId", getSpecificStore); 

// get stores with userId
storeRouter.get('/:retailerId/stores', getStoresWithUserId)