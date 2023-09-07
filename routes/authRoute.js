import bcrypt from "bcrypt";
import { Router } from "express";
import  { body, validationResult } from 'express-validator';
import connect from "../db/connectDB.js";
import { crearToken } from "../middleware/jwt.js";
import { limitLogin } from '../config/limit.js';


const router = Router();
const db = (await connect()).db().collection("usuarios");


router
.use(limitLogin())
.post('/login', [
    body('username').exists().withMessage('Falta nombre de usuario')
    .isString().withMessage('El nombre de usuario debe ser una cadena de texto'),
    body('password').exists().withMessage('Falta contraseña')
    .isString().withMessage('La contraseña debe ser una cadena de texto')

], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        
        const { username, password } = req.body;
        const result = await db.findOne({ username });
        if (!result) return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    
        const valid = await bcrypt.compare(password, result.password);
        if (!valid)
                return res.status(404).json({ status: 400, message: "Contraseña incorrecta" });
    
        const token = await crearToken(result._id);
        res.json({ message: "Usuario logueado", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
.post('/register', [
    body('username').exists().withMessage('Falta nombre de usuario')
    .isString().withMessage('El nombre de usuario debe ser una cadena de texto'),
    body('password').exists().withMessage('Falta contraseña')
    .isString().withMessage('La contraseña debe ser una cadena de texto')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
        let { username, password } = req.body;
        password = await bcrypt.hash(password, 10);
        const result = await db.insertOne({ username, password });
        const token = await crearToken(result.insertedId);
        res.json({ message: 'Usuario registrado', token });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ error: 'Nombre de usuario ya registrado' });
        res.status(500).json({ error: error.message });
    }
});

export default router;