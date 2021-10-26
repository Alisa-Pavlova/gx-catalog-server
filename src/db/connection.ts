import { Sequelize } from 'sequelize'
import { dbHost, dbName, dbPassword, dbUser, dbPort } from 'config'

let sequelizeConnection

try {
  sequelizeConnection = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`)
} catch(err) {
  console.error(err)
}

export default sequelizeConnection