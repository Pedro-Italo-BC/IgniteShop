import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { useRouter } from "next/router"
// import axios from "axios"
import { useContext } from "react"
import { CheckoutContext } from "../../contexts/checkoutContext"
import Head from "next/head"

import { ProductType } from "../../contexts/checkoutContext"
import { priceFormat } from "../../utils/priceFormat"

interface ProductProps{
    product: ProductType
}

export default function Product({product}: ProductProps) {
    
    const {addProductToList, products} = useContext(CheckoutContext)

    
    const {isFallback} = useRouter()
    
    if(isFallback){
        return <p>Loading...</p>
    }
    
    function handleAddProductToList() {
        addProductToList(product)
    }
    
    const productIndex = products.findIndex(value => value.id == product.id)
    
    return(
        <>
        <Head>
          <title>{product.name} | IgniteShop</title>
        </Head>
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=''/>
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{ priceFormat(product.price) }</span>

                <p>
                    {product.description}
                </p>

                <button onClick={handleAddProductToList} disabled={productIndex !== -1} >
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: 'prod_MrYMUNVInoMuS3'}}
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    if(!params) {
        return {
          notFound: true
        }
      }
    
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return{
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount as number / 100,
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1, 
    }
}