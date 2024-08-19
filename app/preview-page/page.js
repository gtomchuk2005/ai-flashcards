"use client"
import React from 'react'
import { Button, Box } from '@mui/material'
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PreviewPage() {

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if(query.get('sucess')){
            console.log("Order Placed! You will receieve an email confirmation");
        }
        
        if(query.get('cancelled')){
            console.log("Order canceled -- continue to shop around and checkout when you're ready.")
        }
    }, [])
    
    return(
        <Box sx={{ marginTop: "100px"}}>
            <form action="/api/checkout_sessions" method="POST">
                <Button type="submit" variant="contained">
                    Checkout
                </Button>
            </form>
        </Box>
    )
}