import { mlapi } from '@services'

const getItem = async id => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await mlapi.get(`/items/${id}`)
      const items = {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        address: data.seller_address.state.name
      }
      resolve(items)
    } catch {
      reject(new Error('Error fetching item'))
    }
  })
}

export default async function handler (req, res) {
  const { q } = req.query
  try {
    const { data } = await mlapi.get(`/sites/MLA/search?q=${q}&limit=4`)
    const categories = data.filters.find(filter => filter.id === 'category')
    const items = await Promise.all(data.results.map(item => getItem(item.id)))

    const response = {
      author: {
        name: 'Paulo',
        lastName: 'Martinez'
      },
      categories: categories.values[0].path_from_root,
      items
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
