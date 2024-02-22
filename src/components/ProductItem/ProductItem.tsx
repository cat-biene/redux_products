import React from 'react'
import { Product } from '../../type/type'

type Props = {}

export default function ProductItem({id, title, price, description, category, image, rating}: Product) {
  return (
    <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
        <p>{image}</p>
    </div>
  )
}