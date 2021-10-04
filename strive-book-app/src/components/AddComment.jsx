import { Component } from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Loader from './Loader'

class AddComment extends Component {
    state = {
        comment: '',
        rate: 0,
        elementId: this.props.id
    }

    fetchComments = async (id) => {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFlNjRiYjUzZDAwMTViMTllZDYiLCJpYXQiOjE2MzIzMTM4MzAsImV4cCI6MTYzMzUyMzQzMH0.TlCoWBwSkaUXG_HyFMfAQnvBaxp9w-P3yR9s7r6R1yE");

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                headers: myHeaders
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({
                    comments: data,
                })
            }


        } catch (e) {
            console.log(e)
        }
    }


    postCommentValue = (objName, value) => {
        this.setState({
            ...this.state,
            [objName]: value
        })
    }


    submitForm = async (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFlNjRiYjUzZDAwMTViMTllZDYiLCJpYXQiOjE2MzIzMTM4MzAsImV4cCI6MTYzMzUyMzQzMH0.TlCoWBwSkaUXG_HyFMfAQnvBaxp9w-P3yR9s7r6R1yE");
        myHeaders.append("Content-Type", "application/json");
        console.log(this.props.id)
        console.log(this.state)

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: myHeaders,
            })
            console.log(response)
            console.log(response.body)
            if (response.ok) {
                alert('Comment posted')

                this.setState({
                    comment: '',
                    rate: '',
                    elementId: ''
                })

            } else {

                alert('Not Posted')

            }


        } catch (err) {
            console.log(err)
        }
    }



    render() {
        return (
            <Container className="d-flex justify-content-center review-form my-4">
                <Form onSubmit={this.submitForm} className="py-3">

                    <Form.Group className="mb-3">
                        <Form.Label>Comment on the book here</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={e => this.postCommentValue('comment', e.target.value)}
                            value={this.state.comment}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Small text"
                            onChange={e => this.postCommentValue('rate', e.target.value)}
                            value={this.state.rate}
                        />
                    </Form.Group>

                    <Button type="submit">
                        Add comment
                    </Button>
                </Form>
                {/* <Loader /> */}
            </Container>
        )
    }
}
export default AddComment
