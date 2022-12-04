import Stripe from 'stripe'

const privateEnv = process.env.STRIPE_SECRET_KEY

export const stripe = new Stripe(privateEnv as string, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop'
    }
})