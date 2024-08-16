'use client'
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react'

export default function Showcase() {
    const [turnCard, setTurnCard] = useState(false)

    const handleTurnCard = () => {
        setTurnCard(!turnCard)
    }

    return(
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" height="625px" sx={{ backgroundColor: "#f7f7f7" }} >
            <Typography mt={3} fontSize="50px" fontFamily="Radio Canada Big">
                How Do YOU Study?
            </Typography>

            <Box width="700px" height="200px" sx={{ position: "relative", marginTop: "50px" }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" sx={{ position: "absolute", transition: "background-color 0.3s ease-in-out", backgroundColor: turnCard ? "#50f163" : "#982bff", borderRadius: "50px" }}>
                    <Typography sx={{ transition: "color 0.5s ease-in-out" }} color={turnCard ? "black" : "white" } fontFamily="Radio Canada Big">
                        {turnCard ? "To determine the strength of the evidence against the null hypothesis." : "What is the purpose of a p-value in hypothesis testing?"}
                    </Typography>
                    <Button variant="contained" onClick={handleTurnCard} sx={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                        {turnCard ? "Show Question" : "Show Answer"}
                    </Button>
                </Box>
            </Box>
    
        </Box>
    );
}
