import connect from "../db/connectDB.js";
const db = (await connect()).db().collection("chefs");
/*
3. Encontrar todos los **chefs** que se especializan en "Carnes"
db.chefs.find({especialidad:"Carnes"}).pretty()

10. Cambiar la especialidad del "ChefC" a "Cocina Internacional" - **CHEFS**
db.chefs.updateOne({nombre:"ChefC"},{$set:{especialidad:"Cocina Internacional"}})

16. Contar cuántos **chefs** hay en la base de datos
db.chefs.count()

19. Agregar un nuevo **chef** a la colección con una especialidad en "Cocina Asiática"
db.chefs.insertOne({nombre:"ChefD",especialidad:"Cocina Asiática"})

24. Listar todos los **chefs** excepto "ChefA"
db.chefs.find({nombre:{$ne:"ChefA"}}).pretty()

29. Eliminar todos los **chefs** que tienen una especialidad en "Cocina Vegetariana"
db.chefs.deleteMany({especialidad:"Cocina Vegetariana"})

*/
export class ChefModel {
    static async getEspecialidad() {
        const result = await db.find({ especialidad: "Carnes" }).toArray();
        return result;
    }
    static async actualizarEspecialidad() {
        const result = await db.updateOne({ nombre: "ChefC" }, { $set: { especialidad: "Cocina Internacional" } });
        return result;
    }
    static async getContar() {
        const result = await db.count();
        return result;
    }
    static async postNuevo() {
        const result = await db.insertOne({ nombre: "ChefD", especialidad: "Cocina Asiática" });
        return result;
    }
    static async getListarExcepto() {
        const result = await db.find({ nombre: { $ne: "ChefA" } }).toArray();
        return result;
    }
    static async deleteVegetariana() {
        const result = await db.deleteMany({ especialidad: "Cocina Vegetariana" });
        return result;
    }
}
