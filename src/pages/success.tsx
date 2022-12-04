import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { SuccessContainer, ImageContainer } from "../styles/pages/success"

interface SuccessProps {
    custumerName: string,
    products: {
        name: string[],
        imageUrl: string[]
    }
}

export default function Success({custumerName, products}:SuccessProps) {
    return(
        <>
         <Head>
          <title>{products.name} | IgniteShop</title>
          <meta name="robots" content="noindex" />
        </Head>
        <SuccessContainer>
            <h1>Compra efetuada</h1>

            <div>

                {products.imageUrl.map(
                    img => {
                        return (
                            <ImageContainer key={img}>
                            <Image src={img} width={120} height={110} alt='' />
                            </ImageContainer>
                        )
                    }
                    )}

            </div>
                
            
            <p>
                Uhuul <strong>{custumerName}</strong>, sua <strong>{products.name.length > 1 ? `compra de ${products.name.length} camisas` : products.name[0]  }</strong>  já está a caminho da sua casa. 
            </p>

            <Link href={'http://localhost:3000'}>
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   
    if(!query.session_id){
        return{
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id)
    
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const custumerName = session.customer_details?.name;

    const products = session.line_items?.data.map(product => {
        return product.price?.product as Stripe.Product
    })

    return {
        props: {
            custumerName, 
            products: {
                name: products?.map(product => {
                    return product.name
                }),
                imageUrl:  products?.map(product => {
                    return product.images[0]
                }),
            }
        }
    }
} 