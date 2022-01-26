import './Header.css'
import logo from '../assets/logo.png'

const Header = () => {

    return (
<div className='nav-style'>
    <div className='logoContainer'>
        <img src={logo} className='logo' alt='logo'></img>
    </div>
</div>

)
}

export default Header