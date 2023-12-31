# Farmacia Campus

------

La cafetería de Campuslands proporcionará a los campistas la conveniencia de adquirir hamburguesas, pero se enfrenta a un desafío crítico relacionado con la gestión de ingredientes. La gestión ineficiente de la disponibilidad de ingredientes puede llevar a problemas operativos, como la falta de ingredientes esenciales o el desperdicio de productos no utilizados por parte de los Chefs. Esto se traduce en una experiencia insatisfactoria para los clientes, pérdida de ingresos y un aumento innecesario en los costos operativos.

La falta de un sistema de gestión de inventario eficiente y automatizado dificulta la capacidad de los Chefs para:

1. Satisfacer la demanda de los clientes de manera constante y oportuna.
2. Mantener un seguimiento preciso de los ingredientes y su fecha de vencimiento.
3. Minimizar el desperdicio de ingredientes y costos innecesarios.
4. Tomar decisiones informadas sobre cuándo realizar pedidos de reposición.
5. Garantizar una experiencia de cliente consistente y de alta calidad en sus platos.

En resumen, los Chefs se enfrentan a un problema crítico de gestión de ingredientes que afecta su capacidad para operar eficientemente y brindar un servicio de calidad. Para abordar este problema, es necesario desarrollar un sistema de gestión de inventario efectivo que permita un control en tiempo real del stock de ingredientes y una planificación de pedidos más precisa.



**Nota :** Briyith te lo agradecerá UwU

------

# MongoDB

```js

use("filtroMongo_KevinAndresGallardoRobles");
/*
id
nombre
especialidad
*/

db.createCollection("chefs", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "especialidad"],
            properties: {
                nombre: {
                    bsonType: "string",
                },
                especialidad: {
                    bsonType: "string",
                }
            }
        }
    }
});

/*
id
nombre
descripcion
stock
precioh
*/

db.createCollection("ingredientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "descripcion", "precio", "stock"],
            properties: {
                nombre: {
                    bsonType: "string",
                },
                descripcion: {
                    bsonType: "string",
                },
                precio: {
                    bsonType: "number",
                },
                stock: {
                    bsonType: "int",
                }
            }
        }
    }
});
/*
id
nombre
id_chef
categoria: {
    nombre,
    descripcion
}
list_ingred: [{
    id_ingrediente,
    cantidad
}]
precio

*/
db.createCollection("hamburguesas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "id_chef", "categoria", "list_ingred", "precio"],
            properties: {
                nombre: {
                    bsonType: "string",
                },
                id_chef: {
                    bsonType: "objectId",
                },
                categoria: {
                    bsonType: "object",
                    required: ["nombre", "descripcion"],
                    properties: {
                        nombre: {
                            bsonType: "string",
                        },
                        descripcion: {
                            bsonType: "string",
                        }
                    }
                },
                list_ingred: {
                    bsonType: "array",
                    required: ["id_ingrediente", "cantidad"],
                    properties: {
                        id_ingrediente: {
                            bsonType: "objectId",
                        },
                        cantidad: {
                            bsonType: "int",
                        }
                    }
                },
                precio: {
                    bsonType: "number",
                }
            }
        }
    }
});

// ------------------------------
// CHEFS
// ------------------------------
db.chefs.insertMany([
    { nombre: "ChefA", especialidad: "Cocina Vegetariana" },
    { nombre: "ChefB", especialidad: "Carnes" },
    { nombre: "ChefC", especialidad: "Cocina Gourmet" }
]);
// ------------------------------
// INGREDIENTES
// ------------------------------
db.ingredientes.insertMany([
    { nombre: "Pan", descripcion: "Pan blanco", precio: 1, stock: 330 },
    { nombre: "Pan integral", descripcion: "Pan integral", precio: 1.5, stock: 243 },
    { nombre: "Queso cheddar", descripcion: "Queso cheddar", precio: 2, stock: 666 },
    { nombre: "Queso mozzarella", descripcion: "Queso mozzarella", precio: 2, stock: 1000 },
    { nombre: "Queso azul", descripcion: "Queso azul", precio: 2, stock: 1000 },
    { nombre: "Queso parmesano", descripcion: "Queso parmesano", precio: 2, stock: 1000 },
    { nombre: "Queso de cabra", descripcion: "Queso de cabra", precio: 2, stock: 111 },
    { nombre: "Queso americano", descripcion: "Queso americano", precio: 2, stock: 1000 },
    { nombre: "Queso suizo", descripcion: "Queso suizo", precio: 2, stock: 1000 },
    { nombre: "Carne de res", descripcion: "Carne de res", precio: 3, stock: 434 },
    { nombre: "Carne de pollo", descripcion: "Carne de pollo", precio: 3, stock: 5666 },
    { nombre: "Carne de cerdo", descripcion: "Carne de cerdo", precio: 3, stock: 344 },
    { nombre: "Carne de cordero", descripcion: "Carne de cordero", precio: 3, stock: 323 },
    { nombre: "Arepa", descripcion: "Arepa", precio: 1, stock: 0 },
    { nombre: "Lechuga", descripcion: "Lechuga", precio: 1, stock: 2342 },
    { nombre: "Tomate", descripcion: "Tomate", precio: 1, stock: 21 },
    { nombre: "Cebolla", descripcion: "Cebolla", precio: 1, stock: 3333 },
    { nombre: "Pepinillos", descripcion: "Pepinillos", precio: 1, stock: 444 },
    { nombre: "Tocino", descripcion: "Tocino", precio: 1, stock: 23 },
    { nombre: "Huevo", descripcion: "Huevo", precio: 1, stock: 322 },
    { nombre: "Aguacate", descripcion: "Aguacate", precio: 1, stock: 111 },
]);
// ------------------------------
// HAMBURGUESAS
// ------------------------------
db.hamburguesas.insertMany([
    {
        nombre: "Clásica",
        id_chef: db.chefs.findOne({ nombre: "ChefA" })._id,
        categoria: {
            nombre: "Clásica",
            descripcion: "Hamburguesa clásica"
        },
        list_ingred: [
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Pan" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Carne de res" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Queso cheddar" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Lechuga" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Tomate" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Cebolla" })._id, cantidad: 1 },
        ],
        precio: 5
    },
    {
        nombre: "Vegetariana",
        id_chef: db.chefs.findOne({ nombre: "ChefA" })._id,
        categoria: {
            nombre: "Vegetariana",
            descripcion: "Hamburguesa vegetariana"
        },
        list_ingred: [
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Pan integral" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Queso mozzarella" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Lechuga" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Tomate" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Cebolla" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Pepinillos" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Aguacate" })._id, cantidad: 1 },
        ],
        precio: 4
    },
    {
        nombre: "Gourmet",
        id_chef: db.chefs.findOne({ nombre: "ChefB" })._id,
        categoria: {
            nombre: "Gourmet",
            descripcion: "Hamburguesa gourmet"
        },
        list_ingred: [
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Pan" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Carne de cordero" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Queso parmesano" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Lechuga" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Tomate" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Cebolla" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Tocino" })._id, cantidad: 1 },
            { id_ingrediente: db.ingredientes.findOne({ nombre: "Huevo" })._id, cantidad: 1 },
        ],
        precio: 10
    }
]);
// ------------------------------
// Usuarios
use("filtroMongo_KevinAndresGallardoRobles")
db.createCollection("usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "password"],
            properties: {
                username: {
                    bsonType: "string",
                },
                password: {
                    bsonType: "string",
                }
            }
        }
    }
});
db.usuarios.createIndex({ username: 1 }, { unique: true });

```

------

# Consultas

1. Encontrar todos los **ingredientes** con stock menor a 400
2. Encontrar todas las **hamburguesas** de la categoría "Vegetariana"
3. Encontrar todos los **chefs** que se especializan en "Carnes"
4. Aumentar en 1.5 el precio de todos los **ingredientes**
5. Encontrar todas las **hamburguesas** preparadas por "ChefB" 
6. Encontrar el nombre y la descripción de todas las **categorías** -- TODO
7. Eliminar todos los **ingredientes** que tengan un stock de 0
8. Agregar un nuevo **ingrediente** a la hamburguesa "Clásica"
9. Encontrar todas las **hamburguesas** que contienen "Pan integral" como ingrediente
10. Cambiar la especialidad del "ChefC" a "Cocina Internacional" - **CHEFS**
11. Encontrar el **ingrediente** más caro
12. Encontrar las **hamburguesas** que no contienen "Queso cheddar" como ingrediente
13. Incrementar el stock de "Pan" en 100 unidades - **INGREDIENTES**
14. Encontrar todos los **ingredientes** que tienen una descripción que contiene la palabra "clásico"
15. Listar las **hamburguesas** cuyo precio es menor o igual a $9
16. Contar cuántos **chefs** hay en la base de datos
17. Encontrar todas las **categorías** que contienen la palabra "gourmet" en su descripción -- TODO
18. Eliminar las **hamburguesas** que contienen menos de 5 ingredientes
19. Agregar un nuevo **chef** a la colección con una especialidad en "Cocina Asiática"
20. Listar las **hamburguesas** en orden ascendente según su precio
21. Encontrar todos los **ingredientes** cuyo precio sea entre $2 y $5
22. Actualizar la descripción del "Pan" a "Pan fresco y crujiente" - **INGREDIENTES**
23. Encontrar todas las **hamburguesas** que contienen "Tomate" o "Lechuga" como ingredientes
24. Listar todos los **chefs** excepto "ChefA"
25. Incrementar en $2 el precio de todas las **hamburguesas** de la categoría "Gourmet"
26. Listar todos los **ingredientes** en orden alfabético
27. Encontrar la **hamburguesa** más cara
28. Agregar "Pepinillos" a todas las **hamburguesas** de la categoría "Clásica"
29. Eliminar todos los **chefs** que tienen una especialidad en "Cocina Vegetariana"
30. Encontrar todas las **hamburguesas** que contienen exactamente 7 ingredientes
31. Encontrar la **hamburguesa** más cara que fue preparada por un chef especializado en "Gourmet"
32. Listar todos los ingredientes junto con el número de **hamburguesas** que los contienen
33. Listar los chefs junto con el número de **hamburguesas** que han preparado
34. Encuentra la categoría con la mayor cantidad de **hamburguesas**
35. Listar todos los chefs y el costo total de ingredientes de todas las **hamburguesas** que han preparado
36. Encontrar todos los **ingredientes** que no están en ninguna hamburguesa
37. Listar todas las **hamburguesas** con su descripción de categoría
38. Encuentra el chef que ha preparado **hamburguesas** con el mayor número de ingredientes en total
39. Encontrar el precio promedio de las **hamburguesas** en cada categoría
40. Listar los chefs y la **hamburguesa** más cara que han preparado

------
# Respuestas
```Javascript

// 1. Encontrar todos los **ingredientes** con stock menor a 400
db.ingredientes.find({stock:{$lt:400}}).pretty()
// 2. Encontrar todas las **hamburguesas** de la categoría "Vegetariana"
db.hamburguesas.find({"categoria.nombre":"Vegetariana"}).pretty()
// 3. Encontrar todos los **chefs** que se especializan en "Carnes"
db.chefs.find({especialidad:"Carnes"}).pretty()
// 4. Aumentar en 1.5 el precio de todos los **ingredientes**
db.ingredientes.updateMany({},{$mul:{precio:1.5}})
// 5. Encontrar todas las **hamburguesas** preparadas por "ChefB" -- TODO: REFERENCIA
db.hamburguesas.find({id_chef:db.chefs.findOne({nombre:"ChefB"})._id}).pretty()
// 6. Encontrar el nombre y la descripción de todas las **categorías** -- TODO
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},descripcion:{$first:"$categoria.descripcion"}}}])
// 7. Eliminar todos los **ingredientes** que tengan un stock de 0
db.ingredientes.deleteMany({stock:0})
// 8. Agregar un nuevo **ingrediente** a la hamburguesa "Clásica" -- TODO: REFERENCIA
db.hamburguesas.updateOne({nombre:"Clásica"},{$push:{list_ingred:{id_ingrediente:db.ingredientes.findOne({nombre:"Pepinillos"})._id,cantidad:1}}})
// 9. Encontrar todas las **hamburguesas** que contienen "Pan integral" como ingrediente -- TODO: REFERENCIA
db.hamburguesas.find({"list_ingred.id_ingrediente":db.ingredientes.findOne({nombre:"Pan integral"})._id}).pretty()
// 10. Cambiar la especialidad del "ChefC" a "Cocina Internacional" - **CHEFS**
db.chefs.updateOne({nombre:"ChefC"},{$set:{especialidad:"Cocina Internacional"}})
// 11. Encontrar el **ingrediente** más caro
db.ingredientes.find().sort({precio:-1}).limit(1)
// 12. Encontrar las **hamburguesas** que no contienen "Queso cheddar" como ingrediente -- TODO: REFERENCIA
db.hamburguesas.find({"list_ingred.id_ingrediente":{$ne:db.ingredientes.findOne({nombre:"Queso cheddar"})._id}}).pretty()
// 13. Incrementar el stock de "Pan" en 100 unidades - **INGREDIENTES**
db.ingredientes.updateOne({nombre:"Pan"},{$inc:{stock:100}})
// 14. Encontrar todos los **ingredientes** que tienen una descripción que contiene la palabra "clásico"
db.ingredientes.find({descripcion:{$regex:"clásico"}}).pretty()
// 15. Listar las **hamburguesas** cuyo precio es menor o igual a $9
db.hamburguesas.find({precio:{$lte:9}}).pretty()
// 16. Contar cuántos **chefs** hay en la base de datos
db.chefs.count()
// 17. Encontrar todas las **categorías** que contienen la palabra "gourmet" en su descripción -- TODO
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},descripcion:{$first:"$categoria.descripcion"}}},{$match:{descripcion:{$regex:"gourmet"}}}])
// 18. Eliminar las **hamburguesas** que contienen menos de 5 ingredientes
//db.hamburguesas.deleteMany({$where:"this.list_ingred.length<5"})
// 18. Eliminar las **hamburguesas** que contienen menos de 5 ingredientes -- Sin $where
db.hamburguesas.deleteMany({"list_ingred.4":{$exists:false}})
// 19. Agregar un nuevo **chef** a la colección con una especialidad en "Cocina Asiática"
db.chefs.insertOne({nombre:"ChefD",especialidad:"Cocina Asiática"})
// 20. Listar las **hamburguesas** en orden ascendente según su precio
db.hamburguesas.find().sort({precio:1}).pretty()
// 21. Encontrar todos los **ingredientes** cuyo precio sea entre $2 y $5
db.ingredientes.find({precio:{$gte:2,$lte:5}}).pretty()
// 22. Actualizar la descripción del "Pan" a "Pan fresco y crujiente" - **INGREDIENTES**
db.ingredientes.updateOne({nombre:"Pan"},{$set:{descripcion:"Pan fresco y crujiente"}})
// 23. Encontrar todas las **hamburguesas** que contienen "Tomate" o "Lechuga" como ingredientes -- TODO: REFERENCIA
db.hamburguesas.find({"list_ingred.id_ingrediente":{$in:[db.ingredientes.findOne({nombre:"Tomate"})._id,db.ingredientes.findOne({nombre:"Lechuga"})._id]}}).pretty()
// 24. Listar todos los **chefs** excepto "ChefA"
db.chefs.find({nombre:{$ne:"ChefA"}}).pretty()
// 25. Incrementar en $2 el precio de todas las **hamburguesas** de la categoría "Gourmet"
db.hamburguesas.updateMany({"categoria.nombre":"Gourmet"},{$inc:{precio:2}})
// 26. Listar todos los **ingredientes** en orden alfabético
db.ingredientes.find().sort({nombre:1}).pretty()
// 27. Encontrar la **hamburguesa** más cara
db.hamburguesas.find().sort({precio:-1}).limit(1)
// 28. Agregar "Pepinillos" a todas las **hamburguesas** de la categoría "Clásica" -- TODO: REFERENCIA
db.hamburguesas.updateMany({"categoria.nombre":"Clásica"},{$push:{list_ingred:{id_ingrediente:db.ingredientes.findOne({nombre:"Pepinillos"})._id,cantidad:1}}})
// 29. Eliminar todos los **chefs** que tienen una especialidad en "Cocina Vegetariana"
db.chefs.deleteMany({especialidad:"Cocina Vegetariana"})
// 30. Encontrar todas las **hamburguesas** que contienen exactamente 7 ingredientes
//db.hamburguesas.find({$where:"this.list_ingred.length==7"}).pretty()
// 30. Encontrar todas las **hamburguesas** que contienen exactamente 7 ingredientes -- Sin $where
db.hamburguesas.find({"list_ingred.6":{$exists:true},"list_ingred.7":{$exists:false}}).pretty()
// 31. Encontrar la **hamburguesa** más cara que fue preparada por un chef especializado en "Gourmet" -- TODO: REFERENCIA
db.hamburguesas.find({"categoria.nombre":"Gourmet",id_chef:db.chefs.findOne({especialidad:"Cocina Gourmet"})._id}).sort({precio:-1}).limit(1)
// 32. Listar todos los ingredientes junto con el número de **hamburguesas** que los contienen
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$list_ingred.id_ingrediente",nombre:{$first:"$list_ingred.id_ingrediente"},cantidad:{$sum:1}}}])
// 33. Listar los chefs junto con el número de **hamburguesas** que han preparado
db.hamburguesas.aggregate([{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},cantidad:{$sum:1}}}])
// 34. Encuentra la categoría con la mayor cantidad de **hamburguesas**
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},cantidad:{$sum:1}}},{$sort:{cantidad:-1}},{$limit:1}])
// 35. Listar todos los chefs y el costo total de ingredientes de todas las **hamburguesas** que han preparado
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},costo:{$sum:"$list_ingred.cantidad"}}}])
// 36. Encontrar todos los ingredientes que no están en ninguna **hamburguesa**
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$list_ingred.id_ingrediente",nombre:{$first:"$list_ingred.id_ingrediente"}}}])
// 37. Listar todas las **hamburguesas** con su descripción de categoría
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$nombre"},descripcion:{$first:"$categoria.descripcion"}}}])
// 38. Encuentra el chef que ha preparado **hamburguesas** con el mayor número de ingredientes en total
db.hamburguesas.aggregate([{$unwind:"$list_ingred"},{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},ingredientes:{$sum:"$list_ingred.cantidad"}}},{$sort:{ingredientes:-1}},{$limit:1}])
// 39. Encontrar el precio promedio de las **hamburguesas** en cada categoría
db.hamburguesas.aggregate([{$group:{_id:"$categoria",nombre:{$first:"$categoria.nombre"},promedio:{$avg:"$precio"}}}])
// 40. Listar los chefs y la **hamburguesa** más cara que han preparado
db.hamburguesas.aggregate([{$group:{_id:"$id_chef",nombre:{$first:"$id_chef"},precio:{$max:"$precio"}}}])

```
