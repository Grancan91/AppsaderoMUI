import { useEffect, useState } from 'react'
import './App.css'
import { Grid, Button, Box, Card, CardHeader, CardActions, Avatar, CardContent,TextField, FormControl} from '@mui/material'
import { blue } from '@mui/material/colors'
import { Link } from 'react-router-dom'

function App() {

  
  
  const hasError = () => {
    return password === '' ? true : false
  }
  const [password, SetPassord] = useState(false)

  useEffect(() => {
    
  },[])

  return (
    <>

    <Box disableGuters={true} sx={{ p: 2, border: '1px dashed grey'}} className='container-login'>

    {/*Card Container of 2 cards*/}

    <Card className='card-container'
    raised={true}    
    alignItems={'center'} 
    justifyContent='center'
    sx={{
      display: 'flex',
      height: '60%',
      width: '60%',
      backgroundColor: 'background'}}>
      
      <Grid container spacing={2}>
      
      <Grid item sm={6} xs={12}>

      {/*Card 1 Container for img*/}
      <Card sx={{
       // backgroundColor: 'primary',
      //  display: 'flex',
      }}>
      <div className='image'></div>
      </Card>
      </Grid>
      
      <Grid items sm={6} xs={12}>

      {/* Content of Login Form*/}
      <Card className='card-login'
      sx={{
        height:'82vh',
        flexGrow:'1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>

        <CardHeader 
        avatar={<Avatar/>}
        title='Login'
        titleTypographyProps={{ variant: 'h4' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight:'0px',
        }}
        >        
        </CardHeader>
        <CardContent sx={{m: 1, width: '30ch'}}>
          <FormControl component="form" noValidate >

            <TextField
              id="outlined-required"
              label="Email Addres"
              type='email'
              sx={{margin: '5px'}}
              />
            <TextField    
              onChange={(e) => SetPassord(e.target.value)}        
              error={hasError()}
              helperText={hasError() ? 'Email or Password incorrect.' : "" }
              id="outlined-required"
              required
              type='password'
              label="Password"
              sx={{margin: '5px'}}
              />
              </FormControl>
        </CardContent>
        <CardActions>
          <Link to='/home'>
          <Button variant='outlined'>Login</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
    </Grid>
    </Card>
    
    </Box>
    </>
  )
}

export default App
