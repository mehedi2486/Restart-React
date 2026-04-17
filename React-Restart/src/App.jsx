//searchable product data table


function ProductCategoryRow({category}){
    return(
        <tr>
            <td colSpan="2">
                {category}
            </td>
        </tr>
    )

}

function ProductRow({product}){
    const name = product.stocked ? product.name :
    <span style={{color:"red"}}>
        {product.name}
    </span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )


}




