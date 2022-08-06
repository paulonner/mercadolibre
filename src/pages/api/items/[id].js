import { mlapi } from '@services'

export default async function handler (req, res) {
  const { id } = req.query
  try {
    const { data: item } = await mlapi.get(`/items/${id}`)
    const { data: description } = await mlapi.get(`/items/${id}/description`)
    const { data: categories } = await mlapi.get(`/categories/${item.category_id}`)

    const response = {
      author: {
        name: 'Paulo',
        lastName: 'Martinez'
      },
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2
        },
        picture: item.pictures[0].url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text
      },
      categories: categories.path_from_root
    }
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
