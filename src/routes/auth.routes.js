import { Router } from "express";
import { check } from "express-validator";

const router = Router();

//Crear usuario
router.post('/new',[
  check('name', 'el nombre es obligatorio').not().isEmpty(),
  check('email', 'el email es obligatorio').isEmail(),
  check('password', 'la contraseña debe ser de 6 caracteres minimo').isLength({min: 6})
], crearUsuario);

//Login usuario
router.post('/', [
  check('email','el email es obligatorio').isEmail(),
  check('password','la contraseña debe ser de 6 caracteres minimo').isLength({min:6})
],loginUsuario);

export default router;