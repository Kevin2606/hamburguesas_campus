import { IngredienteModel } from "../models/ingrediente.js";

export class IngredienteController {
    static async getStock(req, res) {
        try {
            const stock = await IngredienteModel.getStock();
            res.status(200).json(stock);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async aumentarPrecio(req, res) {
        try {
            const result = await IngredienteModel.aumentarPrecio();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async deleteStock0(req, res) {
        try {
            const result = await IngredienteModel.deleteStock0();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getCaro(req, res) {
        try {
            const caro = await IngredienteModel.getCaro();
            res.status(200).json(caro);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async incrementarStock(req, res) {
        try {
            const result = await IngredienteModel.incrementarStock();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getClasico(req, res) {
        try {
            const clasico = await IngredienteModel.getClasico();
            res.status(200).json(clasico);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getPrecio(req, res) {
        try {
            const precio = await IngredienteModel.getPrecio();
            res.status(200).json(precio);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async actualizarDescripcion(req, res) {
        try {
            const result = await IngredienteModel.actualizarDescripcion();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getAlfabetico(req, res) {
        try {
            const alfabetico = await IngredienteModel.getAlfabetico();
            res.status(200).json(alfabetico);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getNoHamburguesa(req, res) {
        try {
            const noHamburguesa = await IngredienteModel.getNoHamburguesa();
            res.status(200).json(noHamburguesa);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}