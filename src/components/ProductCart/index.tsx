import {Product} from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { priceFormat } from '../../utils/priceFormat'
import { CartButton } from '../CartButton'
import { useContext } from 'react'
import { CheckoutContext, ProductType} from '../../contexts/checkoutContext'

interface ProductCartProps {
    product: ProductType

}

export function ProductCart({product}:ProductCartProps) {
    const {addProductToList, products} = useContext(CheckoutContext)

    const productIndex = products.findIndex(value => value.id == product.id)

    function handleAddProductToList() {
      addProductToList(product)
    }

    return (
        
          <Product className='keen-slider__slide'>
            <Link  key={product.id} href={`product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </Link>

              <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{ priceFormat(product.price) }</span>

              </div>
                <CartButton color={'green'} onClick={handleAddProductToList} disabled={productIndex !== -1}/>
              </footer>
           </Product>
        
    )
}