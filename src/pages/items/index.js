import ProductCard from 'components/ProductCard'
import Categories from 'components/Categories'
import Layout from 'components/Layout'
import Info from 'components/Info'
import { api } from 'services'

export default function Items ({ data, title, error }) {
  return (
    <Layout
      title={`${title} - Mercado Libre`}
      typeDescription="items"
      item={title}
    >
      {error ?
        <Info>
          <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
          <lu>
            <li><strong>Revisa la ortográfia</strong> de la palabra.</li>
            <li>Utiliza <strong>palabras más genéricas</strong> o menos palabras.</li>
            <li>Navega por las categorías para encontrar un producto similar</li>
          </lu>
        </Info> :
        <>
          <Categories
            categories={data.categories}
          />
          {data.items.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
            />
          ))}
        </>
      }
    </Layout>
  )
}

export async function getServerSideProps ({ query }) {
  try {
    const { data } = await api.get(`/items?q=${query.search}`)
    return {
      props: {
        data,
        title: query.search
      }
    }
  } catch (err) {
    return {
      props: {
        error: true
      }
    }
  }
}
