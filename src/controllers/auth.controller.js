import { response } from "express";
import  User  from "../models/User.js";
// import { generarJWT } from "../helpers/jwt.js";
import bcrypt from "bcryptjs";

export const crearUsuario = async(req, res= response) => {
  const {email, name, password } = req.body;

  try {
    //Verificar el email
    const usuario = await User.findOne({email});
    if (usuario) {
      return res.status(400).json({
          ok: false,
          msg: 'Este correo ya esta siendo utilizado'
      });
    }

  } catch (error) {
    
  }
}