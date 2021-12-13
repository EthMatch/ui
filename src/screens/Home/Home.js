import { Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Lcard } from '../../components/Lcard/Lcard'
import { Ncard } from '../../components/Ncard/Ncard'

import './home.css'
const useStyles = makeStyles({})
function Home() {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={4.5}
          md={4}
          xs={12}
          sx={{
            backgroundColor: 'transparent',
            padding: '10px',
            marginTop: '30px',
            borderRadius: '10px',
          }}
        >
          <Ncard />
          <Typography
            variant='h4'
            sx={{
              color: 'white',
              fontFamily: 'valo',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            Proposals
          </Typography>
          <Container
            sx={{
              width: '100%',
              padding: '0 !important',
              margin: 0,
              maxHeight: '60vh',
              backgroundColor: 'black',
              borderRadius: '10px',
              overflowY: 'scroll',
            }}
            className='scrollbar'
          >
            <Lcard />
            <Lcard />
            <Lcard />
            <Lcard />
            <Lcard />
            <Lcard />
            <Lcard />
            <Lcard />
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
