import {createContext, ReactNode, useState} from 'react'

export interface ProductType {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description?: string,
    defaultPriceId: string
}

interface CheckoutContextType {
    products: ProductType[],
    addProductToList: (product: ProductType) => void,
    removeProductToList: (id: string) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType )

interface CheckoutProviderProps {
    children: ReactNode
}

export function CheckoutProvider({children}: CheckoutProviderProps) {

    const [products, setProducts] = useState<ProductType[]>([])

    function addProductToList(product: ProductType) {

        const productIndex = products.findIndex(value => value.id == product.id)

        if(productIndex !== -1) {
            return
        }

        setProducts((state) => [...state, product])
    }

    function removeProductToList(id: string) {    
        const filteredArray = products.filter(product => product.id !== id)

        setProducts(filteredArray)
    }


    return(
        <CheckoutContext.Provider value={{products, addProductToList, removeProductToList }}>
            {children}
        </CheckoutContext.Provider>
    ) 
}