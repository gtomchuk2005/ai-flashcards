import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripeCentsToDollars = (amount) => {
    return Math.round(amount * 100)
}

export async function POST(req){
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Pro Subscription',
                    },
                    unit_amount: stripeCentsToDollars(10),
                    recurring: {
                        interval: 'month',
                        interval_count: 1
                    }
                },
                quantity: 1,
            },
        ],
        mode: 'subscription',
        payment_method_types: ['card'],
        success_url: "http://localhost:3000/checkout-success",
        cancel_url: "http://localhost:3000/checkout-cancel",
    })
    return NextResponse.redirect(session.url)
}