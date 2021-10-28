import { Sequelize } from 'sequelize'
import { dbHost, dbName, dbPassword, dbUser, dbPort } from 'config'

let sequelizeConnection

try {
  sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: Number(dbPort),
    dialect: 'postgres',
    logging: false
  })
    
} catch(err) {
  console.error(err)
}

export default sequelizeConnection