import { Sequelize } from 'sequelize'
import dataBaseConfig from '../../config/database'

import Plantas from '../../model/Plants'


const models = [Plantas]
const conn = new Sequelize(dataBaseConfig)

models.forEach((model) => model.init(conn))
/* models.forEach((model) => model.associate && model.associate(conn.models))
 */