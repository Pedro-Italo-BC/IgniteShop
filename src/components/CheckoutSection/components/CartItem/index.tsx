import Image from 'next/image'
import camisa from '../../../../assets/camisas/1.png'
import {CartItemContainer, CartItemContent} from './styles'

import { CheckoutContext, ProductType } from '../../../../contexts/checkoutContext'
import { useContext } from 'react'
import { priceFormat } from '../../../../utils/priceFormat'

interface CartItemProps{
    props: ProductType
}

export function CartItem({props}: CartItemProps) {

    const {removeProductToList} = useContext(CheckoutContext)

    function handleRemoveProductToList() {
        removeProductToList(props.id)
    }

    return(
        <CartItemContainer>

            <div>
            <Image src={props.imageUrl} alt='' height={94} width={94}/> 
            </div>
            
            <CartItemContent> 

            <div>
                <h3>{ props.name }</ h3>

                <span>{ priceFormat(props.price) }</span>
            </div>

            <button onClick={handleRemoveProductToList}>
                Remover
            </button>
            </CartItemContent>
        </CartItemContainer>
    )
}