
export const ItemListcontainer = ({greetings}) => {

    const stylesGreeting = {
        padding: "10px",
        background: "linear-gradient(90deg, rgba(116,12,148,1) 0%, rgba(0,0,154,1) 79%, rgba(79,99,241,1) 100%)",
        borderRadius: "5px",
        width: "600px",
        color: "white",

    }

    const styleItem = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px"
    }

    return (
        <div style={styleItem}>
            <div style={stylesGreeting}>{greetings}</div>
        </div>

    )
}