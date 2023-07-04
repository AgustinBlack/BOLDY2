
export const ItemListcontainer = ({greetings}) => {

    const stylesItems = {
        padding: "10px",
        backgroundColor: "grey",
        borderRadius: "5px",
        widht: "152px",
        color: "white"
    }

    return (
        <div style={stylesItems}>{greetings}</div>
    )
}