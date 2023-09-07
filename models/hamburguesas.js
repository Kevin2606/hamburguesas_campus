import connect from "../db/connectDB.js";
const dbSinCollection = (await connect()).db();
const db = dbSinCollection.collection("hamburguesas");
const dbIngredientes = dbSinCollection.collection("ingredientes");
const dbChefs = dbSinCollection.collection("chefs");
/*
2. Encontrar todas las **hamburguesas** de la categoría "Vegetariana"
db.hamburguesas.find({"categoria.nombre":"Vegetariana"}).pretty()

5. Encontrar todas las **hamburguesas** preparadas por "ChefB" 
db.hamburguesas.find({id_chef:db.chefs.findOne({nombre:"ChefB"})._id}).pretty()

6. Encontrar el nombre y la descripción de todas las **categorías** -- TODO
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},descripcion:{$first:"$categoria.descripcion"}}}])

8. Agregar un nuevo **ingrediente** a la hamburguesa "Clásica"
db.hamburguesas.updateOne({nombre:"Clásica"},{$push:{list_ingred:{id_ingrediente:db.ingredientes.findOne({nombre:"Pepinillos"})._id,cantidad:1}}})

9. Encontrar todas las **hamburguesas** que contienen "Pan integral" como ingrediente
db.hamburguesas.find({"list_ingred.id_ingrediente":db.ingredientes.findOne({nombre:"Pan integral"})._id}).pretty()

12. Encontrar las **hamburguesas** que no contienen "Queso cheddar" como ingrediente
db.hamburguesas.find({"list_ingred.id_ingrediente":{$ne:db.ingredientes.findOne({nombre:"Queso cheddar"})._id}}).pretty()

15. Listar las **hamburguesas** cuyo precio es menor o igual a $9
db.hamburguesas.find({precio:{$lte:9}}).pretty()

17. Encontrar todas las **categorías** que contienen la palabra "gourmet" en su descripción -- TODO
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},descripcion:{$first:"$categoria.descripcion"}}},{$match:{descripcion:{$regex:"gourmet"}}}])

18. Eliminar las **hamburguesas** que contienen menos de 5 ingredientes
db.hamburguesas.deleteMany({"list_ingred.4":{$exists:false}})

20. Listar las **hamburguesas** en orden ascendente según su precio
db.hamburguesas.find().sort({precio:1}).pretty()

23. Encontrar todas las **hamburguesas** que contienen "Tomate" o "Lechuga" como ingredientes
db.hamburguesas.find({"list_ingred.id_ingrediente":{$in:[db.ingredientes.findOne({nombre:"Tomate"})._id,db.ingredientes.findOne({nombre:"Lechuga"})._id]}}).pretty()

25. Incrementar en $2 el precio de todas las **hamburguesas** de la categoría "Gourmet"
db.hamburguesas.updateMany({"categoria.nombre":"Gourmet"},{$inc:{precio:2}})

27. Encontrar la **hamburguesa** más cara
db.hamburguesas.find().sort({precio:-1}).limit(1)

28. Agregar "Pepinillos" a todas las **hamburguesas** de la categoría "Clásica"
db.hamburguesas.updateMany({"categoria.nombre":"Clásica"},{$push:{list_ingred:{id_ingrediente:db.ingredientes.findOne({nombre:"Pepinillos"})._id,cantidad:1}}})

30. Encontrar todas las **hamburguesas** que contienen exactamente 7 ingredientes
db.hamburguesas.find({"list_ingred.6":{$exists:true},"list_ingred.7":{$exists:false}}).pretty()

31. Encontrar la **hamburguesa** más cara que fue preparada por un chef especializado en "Gourmet"
db.hamburguesas.find({"categoria.nombre":"Gourmet",id_chef:db.chefs.findOne({especialidad:"Cocina Gourmet"})._id}).sort({precio:-1}).limit(1)

32. Listar todos los ingredientes junto con el número de **hamburguesas** que los contienen
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$list_ingred.id_ingrediente",nombre:{$first:"$list_ingred.id_ingrediente"},cantidad:{$sum:1}}}])

33. Listar los chefs junto con el número de **hamburguesas** que han preparado
db.hamburguesas.aggregate([{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},cantidad:{$sum:1}}}])

34. Encuentra la categoría con la mayor cantidad de **hamburguesas**
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},cantidad:{$sum:1}}},{$sort:{cantidad:-1}},{$limit:1}])

35. Listar todos los chefs y el costo total de ingredientes de todas las **hamburguesas** que han preparado
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},costo:{$sum:"$list_ingred.cantidad"}}}])

37. Listar todas las **hamburguesas** con su descripción de categoría
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$nombre"},descripcion:{$first:"$categoria.descripcion"}}}])

38. Encuentra el chef que ha preparado **hamburguesas** con el mayor número de ingredientes en total
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},ingredientes:{$sum:"$list_ingred.cantidad"}}},{$sort:{ingredientes:-1}},{$limit:1}])

39. Encontrar el precio promedio de las **hamburguesas** en cada categoría
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},promedio:{$avg:"$precio"}}}])

40. Listar los chefs y la **hamburguesa** más cara que han preparado
db.hamburguesas.aggregate([{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},precio:{$max:"$precio"}}}])

*/


export class HamburguesaModel {
    static async getVegetariana() {
        const result = await db.find({ "categoria.nombre": "Vegetariana" }).toArray();
        return result;
    }
    static async getChef() {
        try {
            const result = await db.find({ id_chef: (await dbChefs.findOne({ nombre: "ChefB" }))._id }).toArray();
            return result;
        }catch (error) {
            console.log(error);
        }
    }
    static async getCategorias() {
        const result = await db.aggregate([{ $group: { _id: "$categoria", nombre: { $first: "$categoria.nombre" }, descripcion: { $first: "$categoria.descripcion" } } }]).toArray();
        return result;
    }
    static async postIngrediente() {
        const result = await db.updateOne({ nombre: "Clásica" }, { $push: { list_ingred: { id_ingrediente: (await dbIngredientes.findOne({ nombre: "Pepinillos" }))._id, cantidad: 1 } } });
        return result;
    }
    static async getPanIntegral() {
        const result = await db.find({ "list_ingred.id_ingrediente": (await dbIngredientes.findOne({ nombre: "Pan integral" }))._id }).toArray();
        return result;
    }
    static async getNoCheddar() {
        const result = await db.find({ "list_ingred.id_ingrediente": { $ne: (await dbIngredientes.findOne({ nombre: "Queso cheddar" }))._id } }).toArray();
        return result;
    }
    static async getPrecioMenor9() {
        const result = await db.find({ precio: { $lte: 9 } }).toArray();
        return result;
    }
    static async getGourmet() {
        const result = await db.aggregate([{ $group: { _id: "$categoria", nombre: { $first: "$categoria.nombre" }, descripcion: { $first: "$categoria.descripcion" } } }, { $match: { descripcion: { $regex: "gourmet" } } }]).toArray();
        return result;
    }
    static async deleteMenos5Ingredientes() {
        const result = await db.deleteMany({ "list_ingred.4": { $exists: false } });
        return result;
    }
    static async getListarPrecioAscendente() {
        const result = await db.find().sort({ precio: 1 }).toArray();
        return result;
    }
    static async getTomateLechuga() {
        const result = await db.find({ "list_ingred.id_ingrediente": { $in: [(await dbIngredientes.findOne({ nombre: "Tomate" }))._id, (await dbIngredientes.findOne({ nombre: "Lechuga" }))._id] } }).toArray();
        return result;
    }
    static async patchIncrementarPrecioGourmet() {
        const result = await db.updateMany({ "categoria.nombre": "Gourmet" }, { $inc: { precio: 2 } });
        return result;
    }
    static async getCara() {
        const result = await db.find().sort({ precio: -1 }).limit(1).toArray();
        return result;
    }
    static async patchPepinillos() {
        const result = await db.updateMany({ "categoria.nombre": "Clásica" }, { $push: { list_ingred: { id_ingrediente: (await dbIngredientes.findOne({ nombre: "Pepinillos" }))._id, cantidad: 1 } } });
        return result;
    }
    static async get7Ingredientes() {
        const result = await db.find({ "list_ingred.6": { $exists: true }, "list_ingred.7": { $exists: false } }).toArray();
        return result;
    }
    static async getCaraGourmet() {
        const chef = (await dbChefs.findOne({ especialidad: "Cocina Gourmet" }))
        if (!chef) throw new Error("No existe chef con esa especialidad");
        const result = await db.find({ "categoria.nombre": "Gourmet", id_chef: chef._id }).sort({ precio: -1 }).limit(1).toArray();
        return result;
    }
    static async getIngredientes() {
        const result = await db.aggregate([{ $unwind: "$list_ingred" }, { $group: { _id: "$list_ingred.id_ingrediente", nombre: { $first: "$list_ingred.id_ingrediente" }, cantidad: { $sum: 1 } } }]).toArray();
        return result;
    }
    static async getChefs() {
        const result = await db.aggregate([{ $group: { _id: "$id_chef", nombre: { $first: "$id_chef" }, cantidad: { $sum: 1 } } }]).toArray();
        return result;
    }
    static async getMayorCantidad() {
        const result = await db.aggregate([{ $group: { _id: "$categoria", nombre: { $first: "$categoria.nombre" }, cantidad: { $sum: 1 } } }, { $sort: { cantidad: -1 } }, { $limit: 1 }]).toArray();
        return result;
    }
    static async getCostoTotal() {
        const result = await db.aggregate([{ $unwind: "$list_ingred" }, { $group: { _id: "$id_chef", nombre: { $first: "$id_chef" }, costo: { $sum: "$list_ingred.cantidad" } } }]).toArray();
        return result;
    }
    static async getDescripcion() {
        const result = await db.aggregate([{ $group: { _id: "$categoria", nombre: { $first: "$nombre" }, descripcion: { $first: "$categoria.descripcion" } } }]).toArray();
        return result;
    }
    static async getChefMasIngredientes() {
        const result = await db.aggregate([{ $unwind: "$list_ingred" }, { $group: { _id: "$id_chef", nombre: { $first: "$id_chef" }, ingredientes: { $sum: "$list_ingred.cantidad" } } }, { $sort: { ingredientes: -1 } }, { $limit: 1 }]).toArray();
        return result;  
    }
    static async getPrecioPromedio() {
        const result = await db.aggregate([{ $group: { _id: "$categoria", nombre: { $first: "$categoria.nombre" }, promedio: { $avg: "$precio" } } }]).toArray();
        return result;
    }
    static async getChefCara() {
        const result = await db.aggregate([{ $group: { _id: "$id_chef", nombre: { $first: "$id_chef" }, precio: { $max: "$precio" } } }]).toArray();
        return result;
    }
}
