
import { Router } from 'express';

import { } from './controller/user.controller.js';
const router = Router()
import {
    getAllUsers, addUsers, updatUser, deleteUser, getUser, search, searchAge, searchOld, searchYoung,
    getAllProducts, addProduct, deleteProduct, updatProduct, searchProduct, getProducts_USers
} from './controller/user.controller.js';
router.get("/users", getAllUsers)
router.post("/users", addUsers)
router.patch("/users/:ID", updatUser)
router.delete("/users/:ID", deleteUser)
router.get("/users/getUser", getUser)
router.get("/users/search", search)
router.get("/users/searchAge", searchAge)
router.get("/users/searchOld", searchOld)
router.get("/users/searchYoung", searchYoung)
router.get("/products", getAllProducts)
router.post("/products", addProduct)
router.delete("/products/:ID", deleteProduct)
router.patch("/products/:ID", updatProduct)
router.get("/products/search", searchProduct)
router.get("/products/:ID", getProducts_USers)
export default router;
