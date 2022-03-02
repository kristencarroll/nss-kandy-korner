import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )


    return (

        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product==${product.id}`}>
                            <p>{product.name} costs {product.price} and is {product.productTypeId} </p>
                        </div>
                    }
                )
            }
        </>
    )
}
