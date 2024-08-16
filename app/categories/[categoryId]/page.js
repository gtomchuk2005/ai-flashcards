    'use client'
    import { Box, TextField, Typography, Button, Stack } from "@mui/material"
    import { useState, useEffect } from 'react'
    import Flashcard from '@/app/components/Flashcard'
    import { POST } from '@/app/api/chat/route'

    export default function Category({ params }) {
        const title = decodeURIComponent(params.categoryId)
        const [prompt, setPrompt] = useState('')
        const [flashcardAmount, setFlashcardAmount] = useState(0)
        const [flashcards, setFlashcards] = useState([])
        const [generate, setGenerate] = useState(false)

        const handleResponses = async () => {
            setGenerate(true)
            const res = await POST(prompt)
            setFlashcards(res)
            
        }

        return(
            <Box width="100%" height="100vh" display="flex" alignItems="center" flexDirection="column">
                <Typography sx={{ fontWeight: "bold", fontSize: "30px", textDecoration: "underline", color: "#982bff", }}>
                    {title}
                </Typography>

                <Box display="flex" alignItems="center" flexDirection="column" >
                    <Box display="flex" alignItems="center">
                        <Typography mr={2} sx={{ fontWeight: "bold" }}>
                            Enter Number of FlashCards
                        </Typography>
                        <TextField placeholder="5" type="number" onChange={(e) => setFlashcardAmount(e.target.value)} />
                    </Box>

                    <Box display="flex" alignItems="center" mb={2} >
                        <Typography mr={2} sx={{ fontWeight: "bold" }}>
                            Enter What You Want To Study
                        </Typography>
                        <TextField width="300px" placeholder="Enter Prompt" onChange={(e) => setPrompt(e.target.value)} />
                    </Box>
                </Box>

                <Button onClick={handleResponses} variant="contained">
                    Generate
                </Button>

                {generate && flashcards.length > 0 ? (
                    <Box display="flex" justifyContent="center" width="1700px">
                        <Stack>
                            {flashcards.slice(0, flashcardAmount).map((flashcard, index) => (
                                <Flashcard key={index} question={flashcard.Question} answer={flashcard.Answer} />
                            ))}
                        </Stack>
                    </Box>
                ) : 
                    <div/>}
            </Box>
        )
    }