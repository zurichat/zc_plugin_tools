import './button.css'

export const ActionBtn = (props)=>{
    return (
        
            <button className="giphyButton greenButton">
                {props.children}
            </button>
        
    )
}

export const WhiteBtn = (props)=>{
    return (
            <button className="whiteBtn">
                {props.children}
            </button>
    )
}
