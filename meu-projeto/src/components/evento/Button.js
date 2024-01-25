function Button(props){
    return <button onclick={props.event}>{props.text}</button>
}
export default Button