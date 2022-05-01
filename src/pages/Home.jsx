import { Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'
import Card from '../components/Card'
import './page.css'

function Home() {


    const [inputText, setInputText] = useState("")
    const [items ,setItems] = useState([])

    const handleInputChange = async (text) => {
        setInputText(text)
        const searchItems = await getItems(text)
        setItems(searchItems ? searchItems : [])
    }

    const getItems = async (text) => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a681eecb&s=${text}`)
        const data = await response.json()
        return data.Search
    }





  return (
    <>
        <div>
        <h1>Movie Search</h1>
    <Row>
        <Col>
            <Form className="container">
                <Form.Group className= "input mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">Search for movies and series</Form.Label> 
                    <Form.Control className="inputHandler" type="text" placeholder="Enter text....."  value= {inputText} onChange={ e => handleInputChange(e.target.value)}/>
                </Form.Group>
            </Form>
        </Col>
  </Row>
        { items && <section className="section">
                    {items.map(item =>  <Card  movie= { item } key={item.imdbID}/>)}
            </section>}
        </div>
       
    </>
  )
}

export default Home