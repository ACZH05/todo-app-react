import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AddTodo from './pages/AddTodo';
import useLocalStorage from 'use-local-storage'
import { TodoContext } from './contexts/TodoContext';

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
  const [todos, setTodos] = useLocalStorage("Todos", [])
  return (
    <TodoContext.Provider value={ {todos, setTodos} }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='add' element={<AddTodo />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  )
}

export default App
