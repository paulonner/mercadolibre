import { html } from 'common-tags'

export const conditionTranslate = condition => {
  const conditions = {
    new: 'Nuevo'
  }

  return conditions[condition]
}

export const metaTag = ({ title, typeDescription, item }) => {
  const meta = {
    title: title || 'Mercado Libre - Envíos Gratis en el día',
    description: {
      home: html`
        Compre productos con Envío Gratis en el día en Mercado Libre México. 
        Encuentre miles de marcas y productos a precios increíbles.`,
      items: html`
        Envíos Gratis en el día ✓ Compre ${item} en cuotas sin interés!
        Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
      item: `Envíos gratis en el día ✓ Compra en meses sin intereses y recibe tu ☞ ${item}`
    }
  }

  return {
    title: meta.title,
    description: typeDescription ? meta.description[typeDescription] : meta.description.home
  }
}
