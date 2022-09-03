import { response } from "express";
import Wishlist from "../models/Wishlist.js";

export const createWishlist = async(req, res = response) => {
  const { wallpaper } = req.body;
  try {
    const newWishlist = new Wishlist({
      wallpaper
    })

    const wishlistSaved = await newWishlist.save();

    res.status(201).json(wishlistSaved);
  } catch (error) {
    console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Porfavor hable con el administrador'
      });
  }
}

export const getWishlistById = async(req, res = response) => {
  try {
    const wishlist = await Wishlist.findById(req.paramas.wihshlistId);
    res.status(200).json(wishlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Porfavor hable con el administrador'
    })
  }
}

export const updateWishlist = async(req, res = response) => {
  const { wishlistId ,wallpaper, productos } = req.body;
  try {
    const wishlist = await Wishlist.findById(wishlistId);
    if (!wishlist) {
      return res.status(404).json({
        ok: false,
        msg: 'El producto no existe'
      });
    }

    const updatedWishlist = await Wishlist.findByIdAndUpdate(wishlistId, {wallpaper, productos}, {
      new: true
    }) 
    res.status(200).json(updatedWishlist)
  } catch (error) {
    console.log(error);
    res.status(500).json({
       ok: false,
        msg: 'Porfavor hable con el administrador'
    })
  }
}

export const deleteProductFromWishlist = async(req, res= response) => {
  const { wishlistId, productId} = req.body;
  try {
    const wishlist = await Wishlist.findById(wishlistId);
    let productos = wishlist.productos;
    console.log(productos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
       ok: false,
        msg: 'Porfavor hable con el administrador'
    })
  }
}