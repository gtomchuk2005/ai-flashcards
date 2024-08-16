'use client'
import { AppBar,Typography, Toolbar, Drawer, Box, Link, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return(
        <Box>
            <AppBar sx={{bgcolor: 'white'}} >
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography p={3} ml={10} sx={{ color: "black", fontWeight: "bold", fontSize: "30px", fontFamily: "Radio Canada Big" }}>
                        <Link href='/' color="black" underline="none">FlashcardsAI</Link>
                    </Typography>

                    <Box display="flex" alignItems="center" ml="auto" mr={5}>
                        <Button p={5} sx={{ backgroundColor: "#982bff", marginRight: "20px", borderRadius: "25px", paddingX: "20px", transition: "transform 0.2s ease-in-out", '&:hover': { backgroundColor: "#982bff", transform: "scale(1.1)"} }} >
                            <Typography color="white" fontWeight="bolder">
                                Login
                            </Typography>
                        </Button>
                        <MenuIcon onClick={handleOpen} sx={{ color: "black", fontSize: "25px" }} />
                    </Box>

                </Box>
                
            </AppBar>

            <Drawer anchor="right" open={isOpen} onClose={handleClose} PaperProps={{ sx: { border: "2px solid #982bff", borderRadius: "20px", margin: "10px"}}}>
                <Sidebar />
            </Drawer>
        </Box>
    )
}