import { Router } from 'express'

import { PlantsController } from '../controllers/PlantsController.js'

const routes = Router()

const plantsController = new PlantsController()

routes.post('/plantas', plantsController.createPlantas)

routes.get('/plantas', plantsController.getAllPlants)

routes.get('/plantas/:id', plantsController.listPlantsById)

routes.put('/plantas/:id', plantsController.updatePlanta)

routes.delete('/plantas/:id', plantsController.deletePlanta)

export { routes }
