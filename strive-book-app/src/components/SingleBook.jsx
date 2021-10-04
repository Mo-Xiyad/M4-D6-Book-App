import { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CommentArea from './CommentArea'
import AddComment from './AddComment'

class SingleBook extends Component {

    state = {
        selected: false
    }

    selectCard = () => {
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <Card

                key={this.props.books._id}
                style={{ width: "24%", marginTop: "10px" }}
                className={this.state.selected ? 'selected' : 'card-style'}

            >
                <Card.Img variant="top" src={this.props.books.img}
                    onClick={this.selectCard}
                />
                {/* <Card.Img variant="top" src={this.props.image} />  this line works only if the book is passed as "image=books.img"  */}
                <Card.Body>
                    <Card.Title className="clamp">{this.props.books.title}</Card.Title>
                </Card.Body>


                {
                    /* <Form.Group onClick={this.selectCard}  className={this.state.selected ? 'd-block mb-3' : "d-none"} controlId="formBasicCheckbox">
                           <Form.Check checked={this.state.selected ? this.state.selected : false} type="checkbox" label="" />
                        </Form.Group> */
                }
                {
                    this.state.selected
                        ?
                        <div>
                            <CommentArea Key={this.props.books.asin} id={this.props.books.asin} />
                            <AddComment Key={this.props.books.asin} id={this.props.books.asin} />
                        </div>

                        : null

                }


            </Card>

        );
    }
}

export default SingleBook;

