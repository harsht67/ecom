import './Button.scss'

function Button(props) {
    return (
        <button {...props} >

            {props.children}

        </button>
    )
}

export default Button