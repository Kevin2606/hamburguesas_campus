import { ChefModel } from "../models/chef.js";

export class ChefController {
    static async getEspecialidad(req, res) {
        try {
            const especialidad = await ChefModel.getEspecialidad();
            res.status(200).json(especialidad);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async actualizarEspecialidad(req, res) {
        try {
            const result = await ChefModel.actualizarEspecialidad();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getContar(req, res) {
        try {
            const contar = await ChefModel.getContar();
            res.status(200).json(contar);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async postNuevo(req, res) {
        try {
            const result = await ChefModel.postNuevo();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async getListarExcepto(req, res) {
        try {
            const listarExcepto = await ChefModel.getListarExcepto();
            res.status(200).json(listarExcepto);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async deleteVegetariana(req, res) {
        try {
            const result = await ChefModel.deleteVegetariana();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}