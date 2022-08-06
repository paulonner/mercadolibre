const style = {
  paddingBottom: '10px',
  fontSize: '14px',
  color: '#999999'
}

const Categories = ({ categories }) => {
  return (
    <div style={style}>
      {categories.map(c => c.name).join(' > ')}
    </div>
  )
}

export default Categories
