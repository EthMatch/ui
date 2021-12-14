import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './screens/Home/Home'
import Bg1 from './assets/images/oldship.webp'
import Bg2 from './assets/images/merge.webp'
import Navbar from './components/Navbar/Navbar'
import { makeStyles } from '@mui/styles'
import './App.css'
import { Lobbies } from './screens/Lobbies/Lobbies'
import { useState } from 'react'
const useStyles = makeStyles({
  main: {
    padding: 0,
    margin: 0,
    minWidth: '100%',
    minHeight: `100vh`,
    backgroundColor: 'black',
    backgroundImage: `url(${Bg1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60vw ',
    backgroundPosition: 'right',
    opacity: 1,
  },
})
function App() {
  const [active, setActive] = useState('Home')
  const classes = useStyles()
  return (
    <>
      <Router>
        <Navbar active={active} setActive={setActive} />
        <Container maxWidth='xl' className={classes.main}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/lobbies' element={<Lobbies />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
