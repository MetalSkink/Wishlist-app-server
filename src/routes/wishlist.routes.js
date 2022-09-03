import { Router } from "express";
import { check } from "express-validator";
import { createWishlist, deleteProductFromWishlist, getWishlistById, updateWishlist } from "../controllers/wishlist.controller.js";


const router = Router();

//Obtener wishlist por Id
router.get('/:id', getWishlistById);

//Crear wishlist
router.post('/', createWishlist);

//Actualizar wishlist
router.put('/', updateWishlist);

//Eliminar producto del wishlist
router.delete('/', deleteProductFromWishlist);


export default router;