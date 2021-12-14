import {
  Button,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

export const Lobbycard = ({ id, status }) => {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '15vh',
          background: '#212121',
          borderLeft: '5px solid #F999B7',
          borderRight: '5px solid #F999B7',
          borderRadius: '20px',
          marginBottom: '40px',
          webkitBoxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          mozBoxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          boxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          marginTop: '20px',
          padding: 0,
        }}
      >
        {/* Main Wrapper */}

        <Container maxWidth sx={{ color: 'white', padding: '5!important' }}>
          <Container sx={{ padding: '8px !important' }}>
            <Typography
              sx={{ width: '100%', fontSize: '15px', fontFamily: 'valo' }}
            >
              LobyId : {id}
            </Typography>
            {status === true ? (
              <Container
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Button
                  size='small'
                  variant='contained'
                  sx={{
                    fontFamily: 'Valo',
                    color: 'white',
                    background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                    fontSize: '12px',
                    marginTop: '10px',
                  }}
                >
                  Join game
                </Button>
              </Container>
            ) : (
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='Enter Key'
                  variant='outlined'
                  sx={{
                    width: '50%',
                    margin: '10px 0px',
                  }}
                />
                <Button
                  size='small'
                  variant='contained'
                  sx={{
                    fontFamily: 'Valo',
                    color: 'white',
                    background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                    fontSize: '12px',
                    marginTop: '10px',
                    height: '40px',
                    margin: '20px',
                  }}
                >
                  Claim
                </Button>
              </Container>
            )}
          </Container>
        </Container>
      </Card>
    </>
  )
}
