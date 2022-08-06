import Layout from 'components/Layout'
import Info from 'components/Info'

export default function Home () {
  return (
    <Layout>
      <Info>
        <h3>Aquí puedes realizar la búsqueda de tu producto</h3>
        <ul>
          <li>Utiliza palabras genéricas o cortas</li>
          <li>No utilices carácteres no válidos por ejemplo: &, %, $, /, (, ), =, ?, ¿,\[], !.</li>
        </ul>
      </Info>
    </Layout>
  )
}
