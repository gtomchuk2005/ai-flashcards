    'use client'
    import { Box, Typography, Button } from '@mui/material'
    import { useState } from 'react'

    export default function Flashcard({question, answer}) {
        const [turnCard, setTurnCard] = useState(false)

        const handleTurnCard = () => {
            setTurnCard(!turnCard)
        }

        return(
            <Box>
                <Box width="1000px" height="300px" sx={{ position: "relative", marginTop: "50px" }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%" sx={{ position: "absolute", transition: "background-color 0.3s ease-in-out", backgroundColor: turnCard ? "#50f163" : "#982bff", borderRadius: "50px" }}>
                        <Typography fontFamily="Radio Canada Big" sx={{ transition: "color 0.5s ease-in-out", color: turnCard ? "#000000" : "white" }}>
                            {turnCard ? (answer) : (question) }
                        </Typography>
                        <Button variant="contained" onClick={handleTurnCard} sx={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                            {turnCard ? "Show Question" : "Show Answer"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }