import '../styles/button.css'

export function ActionBtn({onClick, children}){
    return (
        <button 
            className="w-full rounded text-center text-green-500 hover:text-white hover:bg-green-500 py-2 text-base my-2 duration-200 greenButton"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export function WhiteBtn(props){
    return (
        <button className="whiteBtn">
            {props.children}
        </button>
    )
}
