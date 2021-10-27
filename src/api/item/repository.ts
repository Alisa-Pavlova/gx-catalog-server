import Item, { IItem, IItemInput } from 'db/models/Item'
import { Op } from 'sequelize'

export const getAllByCatalogId = async (catalogId: number): Promise<IItem[]> => {
  return await Item.findAll({ where: { catalog_id: catalogId } })
}

export const getById = async (id: number): Promise<IItem> => {
  const foundItem = await Item.findByPk(id)

  if (!foundItem) {
    throw new Error('Item not found')
  }

  return foundItem
}

export const getByNameInCatalog = async (name: string, catalogId: number): Promise<IItem> => {
  return Item.findOne({ where: { name, catalog_id: catalogId } })
}

export const getBySearch = async (catalogId: number, searchString: string): Promise<IItem[]> => {
  return await Item.findAll({
    where: {
      catalog_id: catalogId,
      [Op.or]: [
       { name: { [Op.like]: '%' + searchString + '%' } },
       { brand: { [Op.like]: '%' + searchString + '%' }},
       { model: { [Op.like]: '%' + searchString + '%' }},
       { price: Number(searchString) },
      ]
    }
  })
}

export const create = async (item: IItemInput): Promise<IItem> => {
  return Item.create(item)
}

export const update = async (id: number, item: IItemInput): Promise<IItem> => {
  const foundItem = await Item.findByPk(id)

  if (!foundItem) {
    throw new Error('Item not found')
  }

  return foundItem.update(item)
}

export const deleteById = async (id: number): Promise<void> => {
  await Item.destroy({
    where: { id }
  })
}