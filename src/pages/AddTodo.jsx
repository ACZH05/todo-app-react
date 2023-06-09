import { Container, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

function AddTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)

    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()

  return (
    <Container>
      <h1 className="my-3">Add Todo</h1>
      <Form
      onSubmit={(e) => {
        e.preventDefault()
        setTodos([...todos, { id: Date.now(), title, description, completed }])
        navigate("/")
        }}>
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

export default AddTodo
