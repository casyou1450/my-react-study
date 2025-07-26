import '../assets/css/Button.css'
const Button = ({ text, type, onClick }) => {
    return (
        <button className={`Button Button_${type} `} onClick={onClick}>
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button