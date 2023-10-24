import express, { Router } from 'express';
import { PlantsController } from '../controllers/PlantsController.js';
import Plantas from '../model/Plants.js';

const dadosPlantas = new PlantsController();

/* Rotas do Front-End */

export const homeRoutes = Router()

homeRoutes.use(express.static('public'))

homeRoutes.get('/home', async (req, res) => {
   const plants = await Plantas.findAll({
    attributes: [ 
        'id',
        'nome',
        'formacultivo',
        'florada',
        'cuidados',
        'categoria',
    ]
   })
   res.render("index", {plants})
})

homeRoutes.get('/home/plantas/:id', async (req, res) => {
    const { id } = req.params;
   const plants = await Plantas.findByPk(id)
   res.render("plantas", {plantas: plants})
})