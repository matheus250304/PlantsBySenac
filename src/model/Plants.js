import { Sequelize, Model } from 'sequelize'

export default class Plantas extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                formacultivo: Sequelize.STRING,
                florada: Sequelize.STRING,
                cuidados: Sequelize.STRING,
                categoria: Sequelize.STRING,
            },
            {
                sequelize,
            },
        )

        return this
    }
}
