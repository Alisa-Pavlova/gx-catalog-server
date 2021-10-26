import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../connection'

export interface IItem {
  id: number
  name: string
  model?: string
  brand?: string
  price: number
  description?: string
  catalog_id: number
  createdAt?: Date
  updatedAt?: Date
}

export interface IItemInput extends Optional<IItem, 'id'> {}

class Item extends Model<IItem, IItemInput> implements IItem {
  public id!: number
  public name!: string
  public model?: string
  public brand?: string
  public price!: number
  public description?: string
  public catalog_id!: number
}

Item.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  catalog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
})

export default Item