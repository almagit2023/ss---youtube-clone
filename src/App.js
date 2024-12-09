import React from 'react'
import Home from './components/Home/Home';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import VideoDetails from './components/Videodetails/VideoDetails';




const App = () => {
  return (
    <Container fluid style={{ minHeight: '100vh', background: 'black', color: '#fff' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<VideoDetails />} />
      </Routes>
    </Container>
  )
}

export default App