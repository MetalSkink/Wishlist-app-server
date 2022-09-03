import { response } from "express";
import  User  from "../models/User.js";
import { generarJWT } from "../helpers/jwt.js";
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

    // Crear el usuario con el modelo
    const dbUser = new User(req.body);

    // Hashear la contraseña
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Guardamos el usuario en la BD
    const savedUser = await dbUser.save();
    
    console.log("🚀 ~ file: auth.controller.js ~ line 28 ~ crearUsuario ~ savedUser", savedUser);

    // Generamos el JWT
    const token = await generarJWT(savedUser._id, name);

    return res.status(201).json({
      ok: true,
      uid: savedUser._id,
      name,
      email,
      msg: 'Usuario creado exitosamente',
      token
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, Porfavor hable con el admin'
    });
  }
}


export const loginUsuario = async(req, res = response) => {
  const {email, password } = req.body;

  try {
    const dbUser = await User.findOne({email});
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario registrado con este email'
      });
    }

    // Confirmar que el password haga match
    const validPassword = bcrypt.compareSync( password, dbUser.password);

    if ( !validPassword){
        return res.status(400).json({
            ok:false,
            msg: "Credenciales incorrectas"
        });
    }

    // Generar el JWT
    const token = await generarJWT(dbUser.id,dbUser.name);
    return res.json({
        ok:true,
        uid: dbUser.id,
        name: dbUser.name,
        email,
        msg: 'Usuario Logeado Exitosamente',
        token
    });

  } catch (error) {
    console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el admin'
        });
  }
}