function Button(){

    const styles = {
        backgroundColor:"hsl(200, 100%, 50%)",
        color:"white",
        Padding:"10px 20px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer" 

    }

    return (
        <button style={styles}>Click me</button>
    )
}

export default Button;