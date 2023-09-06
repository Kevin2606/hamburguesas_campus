import { Router } from "express";
import { IngredienteController } from "../controllers/ingrediente.js";

const router = Router();

/*
1. Encontrar todos los **ingredientes** con stock menor a 400
4. Aumentar en 1.5 el precio de todos los **ingredientes**
7. Eliminar todos los **ingredientes** que tengan un stock de 0
11. Encontrar el **ingrediente** más caro
13. Incrementar el stock de "Pan" en 100 unidades - **INGREDIENTES**
14. Encontrar todos los **ingredientes** que tienen una descripción que contiene la palabra "clásico"
21. Encontrar todos los **ingredientes** cuyo precio sea entre $2 y $5
22. Actualizar la descripción del "Pan" a "Pan fresco y crujiente" - **INGREDIENTES**
26. Listar todos los **ingredientes** en orden alfabético
36. Encontrar todos los **ingredientes** que no están en ninguna hamburguesa
*/
router
.get('/stock', IngredienteController.getStock)
.get('/aumentar-precio', IngredienteController.aumentarPrecio)
.delete('/stock-0', IngredienteController.deleteStock0)
.get('/caro', IngredienteController.getCaro)
.patch('/incrementar-stock', IngredienteController.incrementarStock)
.get('/clasico', IngredienteController.getClasico)
.get('/precio', IngredienteController.getPrecio)
.patch('/actualizar-descripcion', IngredienteController.actualizarDescripcion)
.get('/listar-alfabetico', IngredienteController.getAlfabetico)
.get('/no-hamburguesa', IngredienteController.getNoHamburguesa);

export default router;

// Path: routes/ingredientesRoute.js
