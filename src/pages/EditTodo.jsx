import { Form, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { useNavigate } from 'react-router-dom'

function DisplayId({ todos }) {
    
    return todos.map((todo) => {
        return (
            <option key={ todo.id } value={ todo.id }>{ todo.id }</option>
            )})
        }
        
function EditTodo() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)

    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()

    function changeForm(e) {
        const result = todos.filter(todo => todo.id === parseInt(e.target.value))[0]
        setId(result.id)
        setTitle(result.title)
        setDescription(result.description)
        setCompleted(result.completed)
    }
  return (
    <Container>
        <h1>Edit Todo</h1>
      <Form onSubmit={e => {
        e.preventDefault()
        let data = []
        todos.forEach(todo => {
            if (todo.id === id) data.push({...todo, title: title, description: description, completed: completed})
            if (todo.id !== id) data.push(todo)
        })
        console.log(data)
        setTodos(data)
        navigate("/")
      }}>
        <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Select onChange={changeForm}>
                <option>Select one ID to upload</option>
                <DisplayId todos={todos} />
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >Title</Form.Label>
            <Form.Control type="text" value={title} placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={description} rows={3} onChange={(e) => setDescription(e.target.value)} required />

        </Form.Group>
        <Form.Check type="checkbox" checked={completed} label="Mark as completed" onChange={(e) => setCompleted(e.target.checked)} />
        <Button type="submit" variant="primary" className="mt-3">Submit</Button>
      </Form>
    </Container>
  )
}

export default EditTodo