import React, { Fragment } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/Dataprovider'
import { ProductItem } from './ProductItem'

export const ProductComponent = () => {
    
    const value = useContext(DataContext)
    const [productos] = value.productos

    
    return (
        <Fragment>
        <h1 className="title">Todos los productos</h1>
        <div className="products">
            {
                productos.map((producto) =>(
                    <ProductItem 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    cantidad={producto.cantidad}
                    />
                ))
            }
            <ProductItem />
        </div>
        </Fragment>
    )
}
