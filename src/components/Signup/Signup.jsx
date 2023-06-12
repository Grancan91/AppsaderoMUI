import { useEffect, useState } from 'react';
import {  Link ,Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Paper } from '@mui/material'
import { LockOutlined, Login } from '@mui/icons-material'
import './Signup.css'
import { login } from '../../services/appsaderoApi';

function Signup() {

  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("");

  const user = 
  {
    "email": "abl.gmail.com",
    "password": "123456"
}


  useEffect(() => {
    (async () => {
      await login(user)
    })()
  },[])


  return (
    <div className="grid-content">
      <Paper elevation={24} borderRadius="20px">
        <Grid
          container
          component="main" //Principal container
          height="80vh"
          width="80vw"
        >
          {/*Grid Img*/}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundSize: "cover",
            }}
          ></Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              // backgroundColor= '#F1F1F1'
              //backgroundColor= '#795548'
              maxHeight="350px"
            >
              <Avatar sx={{ m: 1, mt: 4, bgcolor: "background.default" }}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={(e) => console.log("hola!")}
                sx={{ m: 4 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  value={email}
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={login}
                >
                  Signup
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link variant="body2">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 5 }}>
                  {"Copyright © "}
                  <Link color="inherit" href="https://mui.com/">
                    Chuletapp Company
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Signup
