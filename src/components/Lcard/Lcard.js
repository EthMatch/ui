import { Card, Typography } from '@mui/material'
import React from 'react'

export const Lcard = () => {
  return (
    <>
      <Card
        sx={{
          display: 'flex',

          minHeight: '150px',
          background: '#212121',
          borderLeft: '10px solid #F4BEEE',
          borderRight: '5px solid #F4BEEE',
          borderRadius: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          marginBottom: '30px',
        }}
      >
        Hello
      </Card>
    </>
  )
}
