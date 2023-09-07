import connect from "../db/connectDB.js";
const dbHamburguesas = (await connect()).db().collection("hamburguesas");
const db = (await connect()).db().collection("ingredientes");

/*
1. Encontrar todos los **ingredientes** con stock menor a 400
db.ingredientes.find({stock:{$lt:400}}).pretty()

4. Aumentar en 1.5 el precio de todos los **ingredientes**
db.ingredientes.updateMany({},{$mul:{precio:1.5}})

7. Eliminar todos los **ingredientes** que tengan un stock de 0
db.ingredientes.deleteMany({stock:0})

11. Encontrar el **ingrediente** más caro
db.ingredientes.find().sort({precio:-1}).limit(1)

13. Incrementar el stock de "Pan" en 100 unidades - **INGREDIENTES**
db.ingredientes.updateOne({nombre:"Pan"},{$inc:{stock:100}})

14. Encontrar todos los **ingredientes** que tienen una descripción que contiene la palabra "clásico"
db.ingredientes.find({descripcion:{$regex:"clásico"}}).pretty()

21. Encontrar todos los **ingredientes** cuyo precio sea entre $2 y $5
db.ingredientes.find({precio:{$gte:2,$lte:5}}).pretty()

22. Actualizar la descripción del "Pan" a "Pan fresco y crujiente" - **INGREDIENTES**
db.ingredientes.updateOne({nombre:"Pan"},{$set:{descripcion:"Pan fresco y crujiente"}})

26. Listar todos los **ingredientes** en orden alfabético
db.ingredientes.find().sort({nombre:1}).pretty()

36. TODO: Encontrar todos los **ingredientes** que no están en ninguna hamburguesa
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$list_ingred.id_ingrediente",nombre:{$first:"$list_ingred.id_ingrediente"}}}])

*/

export class IngredienteModel {
    static async getStock() {
        const result = await db.find({ stock: { $lt: 400 } }).toArray();
        return result;
    }
    static async aumentarPrecio() {
        const result = await db.updateMany({}, { $mul: { precio: 1.5 } });
        return result;
    }
    static async deleteStock0() {
        const result = await db.deleteMany({ stock: 0 });
        return result;
    }
    static async getCaro() {
        const result = await db.find().sort({ precio: -1 }).limit(1).toArray();
        return result;
    }
    static async incrementarStock() {
        const result = await db.updateOne({ nombre: "Pan" }, { $inc: { stock: 100 } });
        return result;
    }
    static async getClasico() {
        const result = await db.find({ descripcion: { $regex: "clásico" } }).toArray();
        return result;
    }
    static async getPrecio() {
        const result = await db.find({ precio: { $gte: 2, $lte: 5 } }).toArray();
        return result;
    }
    static async actualizarDescripcion() {
        const result = await db.updateOne({ nombre: "Pan" }, { $set: { descripcion: "Pan fresco y crujiente" } });
        return result;
    }
    static async getAlfabetico() {
        const result = await db.find().sort({ nombre: 1 }).toArray();
        return result;
    }
    static async getNoHamburguesa() {
        const result = await dbHamburguesas.aggregate([
            { $unwind: "$list_ingred" },
            { $group: { _id: "$list_ingred.id_ingrediente", nombre: { $first: "$list_ingred.id_ingrediente" } } },
        ]);
        return result;
    }
}
