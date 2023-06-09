import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AddTodo from './pages/AddTodo';

function Layout() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Todos</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/add'>Add Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='add' element={<AddTodo />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
