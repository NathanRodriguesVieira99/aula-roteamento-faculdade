import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav style={{
        width: '100%',
        backgroundColor: 'green'
      }}>
        <ul style={{ 
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,

          fontSize: '2rem'
          }}>
          <Link to={'home'}><li>Home</li></Link>
          <Link to={'about'}><li>About</li></Link>
          <Link to={'contacts'}><li>Contacts</li></Link>
          <Link to={'saiba_mais'}><li>Saiba Mais</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav