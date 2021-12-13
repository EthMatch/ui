import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './screens/Home/Home'
import Bg from './assets/images/oldship.webp'
import Navbar from './components/Navbar/Navbar'
import { makeStyles } from '@mui/styles'
import './App.css'
const useStyles = makeStyles({
  main: {
    padding: 0,
    margin: 0,
    minWidth: '100%',
    minHeight: `100vh`,
    backgroundColor: 'black',
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60vw ',
    backgroundPosition: 'right',
    opacity: 1,
  },
})
function App() {
  const classes = useStyles()
  return (
    <>
      <Router>
        <Navbar />
        <Container maxWidth='xl' className={classes.main}>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
