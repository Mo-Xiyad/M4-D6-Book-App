import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {

    state = {
        selectedType: 0
    }

    getBookType = (e) => {
        this.setState({
            selectedType: e.target.value
        })
        console.log(e)
    };

    render() {
        console.log(this.state.selectedType)
        // console.log(getBookType(e))


        return (

            <Container fluid>
                <Jumbotron className="jumbotron" >
                    <h1 className="text-white">Welcome Geeks!</h1>
                    <p className="text-white">
                        This is a place where we share our favorite books and notes to people who are interested in learnoing new things!
                    </p>

                    <div>
                        <Row className="align-items-center text-white">
                            <Col xs="auto" className="my-1">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select your preffered type</Form.Label>
                                    <Form.Control as="select" onChange={this.getBookType}>
                                        <option value="0" name="History">History</option>
                                        <option value="1" name="Fantasy">Fantasy</option>
                                        <option value="2" name="Horror">Horror</option>
                                        <option value="3" name="Romance">Romance</option>
                                        <option value="4" name="Sifi">Sifi</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col xs="auto" className="ml-auto">
                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </Col>

                        </Row>
                    </div>
                </Jumbotron>
                {/* <CommentArea /> */}
            </Container>


        )
    }
}



export default Home