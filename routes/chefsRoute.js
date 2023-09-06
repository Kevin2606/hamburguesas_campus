import { Router } from "express";
import { ChefController } from "../controllers/chef.js";

const router = Router();

/*
3. Encontrar todos los **chefs** que se especializan en "Carnes"
10. Cambiar la especialidad del "ChefC" a "Cocina Internacional" - **CHEFS**
16. Contar cuántos **chefs** hay en la base de datos
19. Agregar un nuevo **chef** a la colección con una especialidad en "Cocina Asiática"
24. Listar todos los **chefs** excepto "ChefA"
29. Eliminar todos los **chefs** que tienen una especialidad en "Cocina Vegetariana"
*/
router
.get('/especialidad', ChefController.getEspecialidad)
.patch('/actualizar-especialidad', ChefController.actualizarEspecialidad)
.get('/contar', ChefController.getContar)
.post('/nuevo', ChefController.postNuevo)
.get('/listar-excepto', ChefController.getListarExcepto)
.delete('/vegetariana', ChefController.deleteVegetariana);


export default router;

// Path: routes/chefsRoute.js