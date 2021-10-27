import Catalog, { ICatalog, ICatalogInput } from 'db/models/Catalog'
import Item from 'db/models/Item'
import { Sequelize } from 'sequelize-typescript'

export const getAll = async (): Promise<ICatalog[]> => {
  return await Catalog.findAll({
    attributes: { 
      include: [[Sequelize.fn("COUNT", Sequelize.col("Items.id")), "itemsCount"]] 
    },
      include: [{
        model: Item, attributes: []
    }],
    group: ['Catalog.id']
  })
}

export const getById = async (id: number): Promise<ICatalog> => {
  const foundCatalog = await Catalog.findByPk(id)

  if (!foundCatalog) {
    throw new Error('Catalog not found')
  }

  return foundCatalog
}

export const getByName = async (name: string): Promise<ICatalog> => {
  return Catalog.findOne({ where: { name } })
}


export const create = async (catalog: ICatalogInput): Promise<ICatalog> => {
  return Catalog.create(catalog)
}

export const update = async (id: number, сatalog: ICatalogInput): Promise<ICatalog> => {
  const foundCatalog = await Catalog.findByPk(id)

  if (!foundCatalog) {
    throw new Error('Catalog not found')
  }

  return foundCatalog.update(сatalog)
}

export const deleteById = async (id: number): Promise<void> => {
  await Catalog.destroy({
    where: { id }
  })
}