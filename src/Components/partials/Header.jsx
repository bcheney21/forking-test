import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>   
            <Link to='/'>Home</Link>
            { " | " }
            <Link to='/Gabe'>Gabe</Link>
        </nav>
    )
}
export default Header