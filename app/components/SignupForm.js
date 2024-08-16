import { Box, Button, Link, TextField, Typography, Stack } from '@mui/material';

export default function SignupForm({ username, setUsername, email, setEmail, password, setPassword, error, handleSignup }) {
    return (
        <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundImage: 'linear-gradient(90deg, rgba(56,9,121,1) 0%, rgba(17,134,240,1) 0%, rgba(255,0,245,1) 100%)'}}>
            
            <Box sx={{ width: '40%', height: '70%', bgcolor: 'white', borderRadius: 2, boxShadow: 3, textAlign: 'center', mt: 8, position: 'relative'}}>

                <Box sx={{p: 4}}>
                    <Typography variant="h5" marginBottom={'20px'} color={'black'}>Create your account</Typography>

                    <form onSubmit={handleSignup}>
                        
                        <Stack spacing={3}>
                            <TextField label="Username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            <TextField label="Email address" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            
                            {error && <Typography color="error">{error}</Typography>}
                            
                            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: '#a51bc4', color: 'white', '&:hover': {bgcolor: 'purple'}}}>Continue</Button>

                        </Stack>

                    </form>
                </Box>

                <Box width={'100%'} height={'12%'} sx={{bgcolor: '#e6e6e6', borderRadius: 2, position: 'absolute', bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography>Already have an account?</Typography>
                    <Link href='/login' underline="true" sx={{textDecoration: 'none', color: '#a51bc4', '&:hover': {color: 'purple', textDecoration: 'underline'}}}>Log In</Link>
                </Box>

            </Box>

        </Box>
    );
}
