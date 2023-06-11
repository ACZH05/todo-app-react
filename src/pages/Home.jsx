import { Container } from "react-bootstrap"
import { useContext } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { TodoContext } from "../contexts/TodoContext"
import { BsTrash3Fill } from 'react-icons/bs'

function CardGroup({ todos, deleteCard }) {  
  return todos.map((todo) => {
      const completed = todo.completed
      const bg = completed ? "success" : "danger"

      return (
          <Col md={4} key={ todo.id }>
              <Card className="my-3">
                  <Card.Body>
                      <Card.Title>{todo.title}</Card.Title>
                      <Card.Text>{ todo.description }</Card.Text>
                      <span className="d-flex justify-content-between">
                        <Badge bg={bg} className="p-2">{!completed && "Not"} Completed</Badge>
                        <BsTrash3Fill id={ todo.id } className="text-danger fs-4" role="button" onClick={deleteCard} />
                      </span>
                  </Card.Body>
              </Card>
          </Col>
      )
  })
}

function Home() {
    const todos = useContext(TodoContext).todos
    const setTodos = useContext(TodoContext).setTodos
    function deleteCard(e) {
      const cardId = parseInt(e.currentTarget.id)
      setTodos(todos.filter(element => element.id !== cardId))
    }
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} deleteCard={deleteCard} />
      </Row>
    </Container>
  )
}

export default Home
