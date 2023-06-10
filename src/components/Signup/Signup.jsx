import {  Link ,Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'


function Signup() {
  return (
    <Grid
    container component='main' //Principal container
    height={'100vh'} 
    >

        <Grid item xs={12} sm={6} md={6}
        sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundSize:'cover'
        }}
        >
        {/*Grid Img*/}
        </Grid>

        <Grid  item xs={12} sm={6} md={6}>
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
       // backgroundColor= '#F1F1F1'
        //backgroundColor= '#795548'
        maxHeight='350px'
        >
            <Avatar sx={{ m: 1, mt: 4, bgcolor: 'background.default' }}>
                <LockOutlined/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" noValidate onSubmit={(e)=>console.log('hola!')} sx={{ m: 4 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            <FormControlLabel
            control={<Checkbox value="remember"/>}
            label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
            Signup
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link variant='body2'>
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body2" align="center" sx={{mt:5}}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Chuletapp Company
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
                </Typography>
            </Box>
        </Box>
        </Grid>
    </Grid>
    )
}

export default Signup
