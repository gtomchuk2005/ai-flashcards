'use client'
import { AppBar,Typography, Toolbar, Drawer, Box, Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        console.log('hi')
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

                    <Box ml="auto" mr={5}>
                        <AccountCircleIcon sx={{ color: "black", marginRight: "10px", fontSize: "25px"}} />
                        <MenuIcon onClick={handleOpen} sx={{ color: "black", fontSize: "25px" }} />
                    </Box>
                </Box>
            </AppBar>

            <Drawer anchor="right" open={isOpen} onClose={handleClose}>
                <Typography p={3} sx={{ fontWeight: "bold", fontSize: "30px" }}>
                    FlashcardsAI
                </Typography>
            </Drawer>
        </Box>
    )
}