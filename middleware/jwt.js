import { SignJWT, jwtVerify } from "jose"
import dotenv from 'dotenv';
import { ObjectId } from "mongodb";
import connect from "../db/connectDB.js";
const db = (await connect()).db().collection("usuarios");

dotenv.config();

const crearToken = async (id) => {
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    return jwtConstructor;
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        const { id } = jwtData.payload;
        const getUser = await db.findOne({ _id: new ObjectId(id) });
        getUser.rol = 'usuario'
        return getUser;
    } catch (error) {
        if (error.code === "ERR_JWT_EXPIRED") console.log("El token ha expirado");
        if (error.code === "ERR_JWS_INVALID") console.log("El token no es válido");
        if (!error.code === "ERR_JWT_EXPIRED" || !error.code === "ERR_JWS_INVALID") console.log({"Error": error});
        return false;
    }
}

export {
    crearToken,
    validarToken
}