import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../connection'

export interface ICatalog {
  id: number
  name: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ICatalogInput extends Optional<ICatalog, 'id'> {}

class Catalog extends Model<ICatalog, ICatalogInput> implements ICatalog {
  public id!: number
  public name!: string
  public description: string
}

Catalog.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
})

export default Catalog