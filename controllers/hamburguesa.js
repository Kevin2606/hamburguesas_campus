import { HamburguesaModel } from "../models/hamburguesas.js";

export class HamburguesaController {
    static async getVegetariana(req, res) {
        try {
            const vegetariana = await HamburguesaModel.getVegetariana();
            res.status(200).json(vegetariana);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getChef(req, res) {
        try {
            const chef = await HamburguesaModel.getChef();
            res.status(200).json(chef);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getCategorias(req, res) {
        try {
            const categorias = await HamburguesaModel.getCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async postIngrediente(req, res) {
        try {
            const result = await HamburguesaModel.postIngrediente();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getPanIntegral(req, res) {
        try {
            const panIntegral = await HamburguesaModel.getPanIntegral();
            res.status(200).json(panIntegral);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getNoCheddar(req, res) {
        try {
            const noCheddar = await HamburguesaModel.getNoCheddar();
            res.status(200).json(noCheddar);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getPrecioMenor9(req, res) {
        try {
            const precioMenor9 = await HamburguesaModel.getPrecioMenor9();
            res.status(200).json(precioMenor9);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getGourmet(req, res) {
        try {
            const gourmet = await HamburguesaModel.getGourmet();
            res.status(200).json(gourmet);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async deleteMenos5Ingredientes(req, res) {
        try {
            const result = await HamburguesaModel.deleteMenos5Ingredientes();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getListarPrecioAscendente(req, res) {
        try {
            const listarPrecioAscendente = await HamburguesaModel.getListarPrecioAscendente();
            res.status(200).json(listarPrecioAscendente);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getTomateLechuga(req, res) {
        try {
            const tomateLechuga = await HamburguesaModel.getTomateLechuga();
            res.status(200).json(tomateLechuga);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async patchIncrementarPrecioGourmet(req, res) {
        try {
            const result = await HamburguesaModel.patchIncrementarPrecioGourmet();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getCara(req, res) {
        try {
            const cara = await HamburguesaModel.getCara();
            res.status(200).json(cara);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async patchPepinillos(req, res) {
        try {
            const result = await HamburguesaModel.patchPepinillos();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async get7Ingredientes(req, res) {
        try {
            const ingredientes = await HamburguesaModel.get7Ingredientes();
            res.status(200).json(ingredientes);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getCaraGourmet(req, res) {
        try {
            const caraGourmet = await HamburguesaModel.getCaraGourmet();
            res.status(200).json(caraGourmet);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getIngredientes(req, res) {
        try {
            const ingredientes = await HamburguesaModel.getIngredientes();
            res.status(200).json(ingredientes);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getChefs(req, res) {
        try {
            const chefs = await HamburguesaModel.getChefs();
            res.status(200).json(chefs);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getMayorCantidad(req, res) {
        try {
            const mayorCantidad = await HamburguesaModel.getMayorCantidad();
            res.status(200).json(mayorCantidad);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getCostoTotal(req, res) {
        try {
            const costoTotal = await HamburguesaModel.getCostoTotal();
            res.status(200).json(costoTotal);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getDescripcion(req, res) {
        try {
            const descripcion = await HamburguesaModel.getDescripcion();
            res.status(200).json(descripcion);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getChefMasIngredientes(req, res) {
        try {
            const chefMasIngredientes = await HamburguesaModel.getChefMasIngredientes();
            res.status(200).json(chefMasIngredientes);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getPrecioPromedio(req, res) {
        try {
            const precioPromedio = await HamburguesaModel.getPrecioPromedio();
            res.status(200).json(precioPromedio);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getChefCara(req, res) {
        try {
            const chefCara = await HamburguesaModel.getChefCara();
            res.status(200).json(chefCara);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}