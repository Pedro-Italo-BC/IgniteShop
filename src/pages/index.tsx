
import { HomeContainer } from '../styles/pages/home'
import {useKeenSlider} from 'keen-slider/react'

import { SkeletonItem } from '../components/SkeletonItem'
import { ProductCart } from '../components/ProductCart'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'

import Head from 'next/head'

import { useRouter } from 'next/router'

import { ProductType } from '../contexts/checkoutContext'

interface HomeProps {
  products: ProductType[]
}

export default function Home({products}: HomeProps) {
 
  const {isFallback} = useRouter()
 
  const [sliderRef] = useKeenSlider({

    mode: 'free-snap',
    slides: {
       perView: 3,
       spacing: 48,
       origin: 'center'
      } ,
  })

  
  return (
    <>
    <Head>
      <title>IgniteShop</title>
    </Head>

    <HomeContainer ref={sliderRef} className="keen-slider">

    {

      isFallback === true ? <>
      
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem/>
    
      </>:
      products.map(product => {
        return(
          <ProductCart product={product} key={product.id}/>
        )
      })
    }      
    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount as number / 100,
      defaultPriceId: price.id
    }
  })

  return {
   props: {
    products
   },
   revalidate: 60 * 60 * 2
  }
  
}
