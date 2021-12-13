import { Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import { BsFillTrophyFill } from 'react-icons/all'

import './lcard.css'
const Person = ' 0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f'
const Avatar = `https://avatars.dicebear.com/api/pixel-art/${Person}.svg`
export const Lcard = () => {
  return (
    <>
      {/* Main card Container */}
      <Card
        sx={{
          display: 'flex',
          minHeight: '175px',
          background: '#212121',
          borderLeft: '4px solid #FBFF00',
          borderRight: '4px solid #FBFF00',
          borderRadius: '20px',
          paddingLeft: '10px',
          paddingRight: '10px',
          marginBottom: '25px',
          marginTop: '15px',
          flexDirection: 'column',
          webkitBoxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          mozBoxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          boxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          fontFamily: 'Valo !important',
        }}
      >
        {/* Player Wrapper */}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px',
            justifyContent: 'space-between',
          }}
        >
          {/* Player 1 */}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                display: 'flex',
                margin: '5px',
              }}
            >
              <img
                src={Avatar}
                style={{ width: '25px', height: '25px', borderRadius: '50%' }}
              />
              <Typography
                noWrap='true'
                sx={{
                  color: 'white',
                  fontSize: '0.8rem',
                  marginLeft: '3px',
                  fontFamily: 'Valo',
                }}
              >
                {Person.slice(0, 12)}
              </Typography>
            </div>

            {/* Player 2 */}

            <div style={{ display: 'flex', margin: '5px' }}>
              <img
                src={Avatar}
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '0.8rem',
                  marginLeft: '3px',
                  fontFamily: 'Valo',
                }}
                noWrap='true'
              >
                {Person.slice(0, 12)}
              </Typography>
            </div>
          </div>

          {/* Operator */}

          <div style={{ float: 'right' }}>
            <img
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              style={{ width: '25px', height: '25px', borderRadius: '50%' }}
            />
          </div>
        </Container>

        {/* Break Line */}

        <hr className='hrtag'></hr>

        {/* Match Details Main Wrapper */}

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* Prize Pool Container */}

          <div
            style={{
              width: '33%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'yellow',
                fontWeight: '100',
                fontFamily: 'Valo',
              }}
            >
              Prize Pool
            </Typography>

            {/* Sub div In Prize Pool */}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
                border: '2px solid yellow',
                padding: '6px 12px',
                borderRadius: '10px',
              }}
            >
              <BsFillTrophyFill style={{ color: 'yellow' }} />
              <Typography
                sx={{
                  fontSize: '14px',
                  marginLeft: '5px',
                  color: 'white',
                }}
              >
                20/9
              </Typography>
            </div>
            <Typography
              sx={{ fontSize: '12px', color: 'lightgray', marginTop: '10px' }}
            >
              Pool/Operator Share
            </Typography>
          </div>

          {/* Timer */}
          <div
            style={{
              width: '33%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{ fontSize: '14px', color: 'white', fontFamily: 'Valo' }}
            >
              Timer
            </Typography>
            <p style={{ fontFamily: 'Valo', color: 'white' }}>00:00</p>
          </div>

          {/* Approval Div */}

          <div
            style={{
              width: '33%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='Contained'
              sx={{
                fontFamily: 'Valo',
                color: 'white',
                background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                fontSize: '12px',
              }}
            >
              Approve
            </Button>
          </div>
        </Container>
      </Card>
    </>
  )
}
