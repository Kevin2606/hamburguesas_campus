import { Router } from "express";
import { HamburguesaController } from "../controllers/hamburguesa.js";

const router = Router();

/*
2. Encontrar todas las **hamburguesas** de la categoría "Vegetariana"
5. Encontrar todas las **hamburguesas** preparadas por "ChefB" 
6. Encontrar el nombre y la descripción de todas las **categorías** -- TODO
8. Agregar un nuevo **ingrediente** a la hamburguesa "Clásica"
9. Encontrar todas las **hamburguesas** que contienen "Pan integral" como ingrediente
12. Encontrar las **hamburguesas** que no contienen "Queso cheddar" como ingrediente
15. Listar las **hamburguesas** cuyo precio es menor o igual a $9
17. Encontrar todas las **categorías** que contienen la palabra "gourmet" en su descripción -- TODO
18. Eliminar las **hamburguesas** que contienen menos de 5 ingredientes
20. Listar las **hamburguesas** en orden ascendente según su precio
23. Encontrar todas las **hamburguesas** que contienen "Tomate" o "Lechuga" como ingredientes
25. Incrementar en $2 el precio de todas las **hamburguesas** de la categoría "Gourmet"
27. Encontrar la **hamburguesa** más cara
28. Agregar "Pepinillos" a todas las **hamburguesas** de la categoría "Clásica"
30. Encontrar todas las **hamburguesas** que contienen exactamente 7 ingredientes
31. Encontrar la **hamburguesa** más cara que fue preparada por un chef especializado en "Gourmet"
32. Listar todos los ingredientes junto con el número de **hamburguesas** que los contienen
33. Listar los chefs junto con el número de **hamburguesas** que han preparado
34. Encuentra la categoría con la mayor cantidad de **hamburguesas**
35. Listar todos los chefs y el costo total de ingredientes de todas las **hamburguesas** que han preparado
37. Listar todas las **hamburguesas** con su descripción de categoría
38. Encuentra el chef que ha preparado **hamburguesas** con el mayor número de ingredientes en total
39. Encontrar el precio promedio de las **hamburguesas** en cada categoría
40. Listar los chefs y la **hamburguesa** más cara que han preparado
*/

router
.get('/vegetariana', HamburguesaController.getVegetariana)
.get('/chef', HamburguesaController.getChef)
.get('/categorias', HamburguesaController.getCategorias)
.patch('/nuevo-ingrediente', HamburguesaController.postIngrediente)
.get('/pan-integral', HamburguesaController.getPanIntegral)
.get('/no-cheddar', HamburguesaController.getNoCheddar)
.get('/precio-menor-9', HamburguesaController.getPrecioMenor9)
.get('/gourmet', HamburguesaController.getGourmet)
.delete('/menos-5-ingredientes', HamburguesaController.deleteMenos5Ingredientes)
.get('/listar-precio-ascendente', HamburguesaController.getListarPrecioAscendente)
.get('/tomate-lechuga', HamburguesaController.getTomateLechuga)
.patch('/incrementar-precio-gourmet', HamburguesaController.patchIncrementarPrecioGourmet)
.get('/cara', HamburguesaController.getCara)
.patch('/pepinillos', HamburguesaController.patchPepinillos)
.get('/7-ingredientes', HamburguesaController.get7Ingredientes)
.get('/cara-gourmet', HamburguesaController.getCaraGourmet)
.get('/ingredientes', HamburguesaController.getIngredientes)
.get('/chefs', HamburguesaController.getChefs)
.get('/mayor-cantidad', HamburguesaController.getMayorCantidad)
.get('/costo-total', HamburguesaController.getCostoTotal)
.get('/descripcion', HamburguesaController.getDescripcion)
.get('/chef-mas-ingredientes', HamburguesaController.getChefMasIngredientes)
.get('/precio-promedio', HamburguesaController.getPrecioPromedio)
.get('/chef-cara', HamburguesaController.getChefCara);

export default router;

// Path: routes/hamburguesasRoute.js