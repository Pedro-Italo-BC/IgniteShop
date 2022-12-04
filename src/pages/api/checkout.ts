import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe"

export default async function handle(req: NextApiRequest, res: NextApiResponse){

    const {priceId} = req.body 

    if(req.method !== 'POST'){
        return(
            res.status(405).json({error: 'Method not allowed'})
        )
    }

    if(!priceId) {
        return (
            res.status(400).json({error: 'priceId '})
        )
    }


    const successUrl = `${process.env.SUCCESS_PAGE}/success?session_id={CHECKOUT_SESSION_ID}`

    const cancelUrl = `${process.env.CANCEL_PAGE}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: priceId
    }) 

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}

