import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Headbar from './components/Navbar/Headbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <Router>
        <Headbar />
        <div style={{ display: 'flex' }}>
          <div className='sidebar-main'>
            <Sidebar />
          </div>
          <div className='sidebar-screens'>Hello there</div>
        </div>
      </Router>
    </>
  )
}

export default App
