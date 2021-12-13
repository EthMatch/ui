import {
  Button,
  Card,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
  inputw: {},
})
export const Ncard = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [age, setAge] = useState('')

  const handlechange = (event) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Card
        fluid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '15vh',
          background: '#212121',
          borderLeft: '5px solid #ff4655',
          borderRight: '5px solid #ff4655',
          borderRadius: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          marginBottom: '40px',
        }}
      >
        <FormControl
          sx={{ width: '100px', marginRight: '20px' }}
          variant='standard'
        >
          <InputLabel
            id='demo-simple-select-label'
            sx={{ color: 'white', fontFamily: 'Valo' }}
          >
            Entry Fee
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Emtry Fee'
            onChange={handlechange}
            sx={{ color: 'white' }}
          >
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        <Button
          size='small'
          sx={{
            fontSize: '15px',
            background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
            lineHeight: `16px`,
            fontFamily: 'valo',
            textOverflow: `ellipsis`,
            height: `32px`,
            borderRadius: `12px`,
            padding: `8px 16px`,
            color: `white`,
          }}
        >
          Enter MatchMaking
        </Button>
      </Card>
    </>
  )
}
