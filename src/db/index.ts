import Catalog from './models/Catalog'
import Item from './models/Item'

const dbInit = () => {
  Catalog.sync()
  Item.belongsTo(Catalog, { foreignKey: 'catalog_id' })
  Item.sync()
}
export default dbInit