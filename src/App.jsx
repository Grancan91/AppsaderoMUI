import { isValidElement, useEffect, useState } from 'react'
import './App.css'
import { Box, Card, CardHeader, Avatar, CardContent,InputAdornment, TextField, Divider, FormControl} from '@mui/material'
import { blue } from '@mui/material/colors'
import { AccountCircle } from '@mui/icons-material'
function App() {

  
  
  const hasError = () => {
    password === '' ? false : false
  }
  const [password, SetPassord] = useState(false)

  useEffect(() => {
    
  },[])

  console.log(password)
  return (
    <>

    <Box sx={{ p: 2, border: '1px dashed grey' }} className='container-login'>

    {/*Card Container of 2 cards*/}
    <Card 
    alignItems={'center'} 
    justifyContent='center'
    sx={{
      display: 'flex',
      height: '55vh',
      width: '45vw',
      backgroundColor: blue[500]}}>
      
      {/*Card 1 Container for img*/}
      <Card sx={{
        width: '50%',
        backgroundColor: blue[500],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div className='image'></div>
      </Card>

      {/* Content of Login Form*/}
      <Card
      sx={{
        width: '50%',
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
         justifyItems: 'center',
         alignItems: 'center',
         marginRight:'0px',
        }}
          >        
        </CardHeader>
        <CardContent sx={{m: 1, width: '30ch'}}>
          <FormControl>

            <TextField
              id="outlined-required"
              label="Email Addres"
              sx={{margin: '10px'}}
              />
            <TextField    
              onChange={(e) => SetPassord(e.target.value)}        
              error={hasError}
              helperText="Incorrect entry."
              id="outlined-required"
              required
              type='password'
              label="Password"
              sx={{margin: '10px'}}
              />
              </FormControl>
        </CardContent>
      </Card>
    </Card>
    
    </Box>
      
    </>
  )
}

export default App
