'use client'
import { Box, TextField, Typography, Button, Stack } from "@mui/material";
import { useState, useEffect } from 'react';
import Flashcard from '@/app/components/Flashcard';
import { POST } from '@/app/api/chat/route';
import { useRouter, usePathname } from "next/navigation";
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Category({ params }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const title = decodeURIComponent(params.categoryId);
    const [prompt, setPrompt] = useState('');
    const [flashcardAmount, setFlashcardAmount] = useState(0);
    const [flashcards, setFlashcards] = useState([]);
    const [generate, setGenerate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (!user) {
            console.log('user signed out');

            if (pathname !== '/signup') {
                router.push('/login');
            }
            else {
                router.push('/signup'); 
            }
        }
        setLoading(false)
        })
    })

    if (loading) {
        return <div>Loading...</div>
    }

    const handleResponses = async () => {
        setGenerate(true);
        const res = await POST(prompt);
        setFlashcards(res);
        setCurrentIndex(0); // Reset to the first flashcard when new ones are generated
    };

    const goToNextFlashcard = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, flashcardAmount - 1));
    };

    const goToPreviousFlashcard = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <Box width="100%" height="100vh" display="flex" alignItems="center" flexDirection="column" marginTop="100px">
            <Typography sx={{ fontWeight: "bold", fontSize: "30px", textDecoration: "underline", color: "#982bff" }}>
                {title}
            </Typography>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Box display="flex" alignItems="center">
                    <Typography mr={2} sx={{ fontWeight: "bold" }}>
                        Enter Number of FlashCards
                    </Typography>
                    <TextField placeholder="5" type="number" onChange={(e) => setFlashcardAmount(Number(e.target.value))} />
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
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
                <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                    <Flashcard question={flashcards[currentIndex].Question} answer={flashcards[currentIndex].Answer} />
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button onClick={goToPreviousFlashcard} disabled={currentIndex === 0}>
                            Previous
                        </Button>
                        <Button onClick={goToNextFlashcard} disabled={currentIndex === flashcardAmount - 1} sx={{ ml: 2 }}>
                            Next
                        </Button>
                    </Box>
                </Box>
            ) : (
                <div/>
            )}
        </Box>
    );
}
