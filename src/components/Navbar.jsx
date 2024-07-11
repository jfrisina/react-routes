import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
    </nav>
  )
}

export default Navbar