'use client'
import { Toys } from "@mui/icons-material"
import { Box, Typography, Button, Link, Modal, TextField } from "@mui/material"
import { useState, useEffect } from 'react'
import { signOut } from "firebase/auth"
import { auth } from "@/firebase"

export default function Sidebar({ closeSidebar }) {
    const [categories, setCategories] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        if(categoryName.length > 0) {
            setCategories((category) => [...categories, categoryName])
        }
    }

    return(
        <Box height={'100%'} display="flex" flexDirection="column" alignItems="center">
            <Typography p={3} sx={{ fontWeight: "bold", fontSize: "30px" }}>
                FlashcardsAI
            </Typography>
            
            <Button variant="outlined" onClick={handleOpenModal} sx={{ marginBottom: "20px", borderColor: "#982bff", color: "#982bff", '&:hover': { color: "#982bff", borderColor: "#982bff", backgroundColor: "rgba(152, 43, 255, 0.1)" }}} >
                + New Group
            </Button>

            <Box display="flex" alignItems="center" flexDirection="column">
                {categories.map((category, index) => (
                    <Box key={index} sx={{ marginBottom: "5px" }}>
                        <Button variant="outlined">
                            <Link underline='none' href={`/categories/${category}`}>
                                <Typography>
                                    {category}
                                </Typography>
                            </Link>
                        </Button>
                    </Box>
                ))}
            </Box>

            <Modal open={openModal} onClose={handleCloseModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box width="500px" height="350px" display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "white" }}>
                    <Typography p={3}>
                        Category Name:
                    </Typography>
                    <TextField width="400px" onChange={(e) => setCategoryName(e.target.value)} />
                    <Button onClick={handleCloseModal}>
                        Save
                    </Button>
                </Box>
            </Modal>

            <Button onClick={() => {
                signOut(auth);
                closeSidebar();
            }} sx={{ width: "60%", position: 'absolute', bottom: 20, backgroundColor: "#982bff", fontWeight: "bold",fontSize: "20px", color: "white", borderRadius: "30px", transition: "transform 0.2s ease-in-out", '&:hover': { backgroundColor: "#982bff", transform: "scale(1.1)" }}}>
                <Link underline='true' sx={{ color: "white" }}>Sign Out</Link>
            </Button>
        </Box>
    )
}