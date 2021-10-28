import Catalog from './models/Catalog'
import Item from './models/Item'

const dbInit = () => {
  Item.sync({ alter: true })
  Catalog.hasMany(Item, { onDelete: 'cascade', foreignKey: 'catalog_id', as: 'items' })
  Catalog.sync({alter: true })
}
export default dbInit