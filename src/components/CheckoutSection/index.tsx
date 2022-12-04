import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import { CartContainer, CloseButton, CartList, CartContent, FinishingShoppingBottom} from './styles'

import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'

import {CartItem} from './components/CartItem/index'
import { sumPrice } from '../../utils/sumPrice'
import axios from 'axios'


export function CheckoutSection() {

    const {products} = useContext(CheckoutContext)

    const [isCreatingNewCheckout, setIsCreatingNewCheckout] = useState(false)

    async function handleBuyProduct() {
        try{

            setIsCreatingNewCheckout(true)

            const defaultPriceIdProduct = products.map(product => {
                return {
                    price: product.defaultPriceId,
                    quantity: 1
                }})

            const response = await axios.post('/api/checkout', {
                priceId: defaultPriceIdProduct     
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl

        }catch(err){
            setIsCreatingNewCheckout(false)
            console.log(err)
        }
    }


    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton color={'gray'}/>
            </Dialog.Trigger>

            <Dialog.Portal>
                <CartContainer>
                    <CloseButton>
                        <X size={24} weight="bold"/>
                    </CloseButton>

                    <h2>Sacola de compras</h2>
                    <CartContent>

                    <CartList>

                        {
                            products.map(product => {
                                return(
                                    <CartItem key={product.id} props={product}/>
                                )
                            })
                        }

                    </CartList>

                    <div>
                        

                        <table>
                            <tbody>
                                <tr>
                                    <td>Quantidade</td>
                                    <td>{products.length === 1 ? `${products.length} Item` : `${products.length} Itens`}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Valor total</td>
                                    <td>{sumPrice(products)}</td>
                                </tr>
                            </tfoot>
                        </table>

                        <FinishingShoppingBottom onClick={handleBuyProduct} disabled={isCreatingNewCheckout}>Finalizar compra</FinishingShoppingBottom>
                    </div>
                    </CartContent>

                    
                </CartContainer>
            </Dialog.Portal>
        </Dialog.Root>
    )
}