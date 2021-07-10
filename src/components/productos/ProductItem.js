import React from 'react'
import { Fragment } from 'react'

export const ProductItem = ({
    id,
    title,
    price,
    image,
    cantidad
    }) => {

    return (
        <Fragment>
        <div className="products">
            <div className="product">
                <a href="#">
                <div className="product__img">
                    <img src={image} alt={title} />
                </div>
                </a>
                <div className="detalle__producto">
                    <h1> {title} </h1>
                    <p className="price"> {price} </p>
                    <div><a href="#" className="btn__producto">Ver producto</a></div>
                    <br></br>
                    <div className="buttom">
                        <button className="btn">Agregar al carrito</button>
                    </div>
                </div>
            </div>   
        </div>
        </Fragment>
    )
}
