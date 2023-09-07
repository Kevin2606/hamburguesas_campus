import { Router } from "express";
import connect from "../db/connectDB.js";
import { crearToken } from "../middleware/jwt.js";

const router = Router();
const db = (await connect()).db().collection("usuarios");


router
.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Falta nombre de usuario o contraseña' });
    const result = await db.findOne({ username, password });
    if (!result) return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    const token = await crearToken(result._id);
    res.json({ message: "Usuario logueado", token });
})
.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Falta nombre de usuario o contraseña' });
    const result = await db.insertOne({ username, password });
    const token = await crearToken(result.insertedId);
    res.json({ message: 'Usuario registrado', token });
});

export default router;