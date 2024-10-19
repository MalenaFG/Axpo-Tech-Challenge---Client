import "./App.css"
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
