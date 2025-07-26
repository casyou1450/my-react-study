import '../assets/css/Header.css'
import Button from '../components/Button'
const Header = ({ title, leftButton, rightButton }) => {
    return (
        <header className='Header'>
            <div>
                {leftButton}
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {rightButton}
            </div>
        </header>
    )
}

export default Header