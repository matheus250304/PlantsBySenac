import Plantas from "../model/Plants.js";

class PlantsController {
  async createPlantas(req, res) {
    const { nome, formacultivo, florada, cuidados, categoria } =
      req.body
    const newPlant = await Plantas.create({
      nome,
      formacultivo,
      florada,
      cuidados,
      categoria
    })
    res.status(201).json([newPlant])
  }
  async getAllPlants(req, res) {
    const allPlants = await Plantas.findAll({
      attributes: [
        'nome',
        'formacultivo',
        'florada',
        'cuidados',
        'categoria'
      ]
    })
    res.status(200).json(allPlants)
  }

  async listPlantsById(req, res) {
    try {
      const { id } = req.params

      const plantas = await Plantas.findByPk(id)
      if (!plantas) {
        return res.status(400).json({
          errors: ['Planta não existe'],
        })
      }
      return res.json(plantas)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
  async updatePlanta(req, res) {
    const { id } = req.params
    const { nome, formacultivo, florada, cuidados, categoria  } =
      req.body
    const updatedPlanta = await Plantas.update(
      {
        nome, formacultivo, florada, cuidados, categoria 
      },
      {
        where: { id: id },
      },
    )
    if (!updatedPlanta) {
      res.status(404).json('Erro ao atualizar a Planta')
    } else {
      res.status(200).json('Planta atualizada com sucesso')
    }
  }
  async deletePlanta(req, res) {
    const { id } = req.params
    const plantas = await Plantas.destroy({
      where: { id: id },
    })
    if (!plantas) {
      res.status(400).json('Planta não encontrada')
    } else {
      res.status(200).json('Planta deletada com sucesso')
    }
  }
}

export { PlantsController };
