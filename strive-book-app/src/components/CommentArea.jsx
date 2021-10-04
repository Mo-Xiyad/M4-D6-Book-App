import { Component } from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import DeleteBook from './DeleteBook'
import StarRating from './StarRating'

class CommentArea extends Component {
    state = {
        comments: [],

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



    componentDidMount = async () => {
        this.fetchComments(this.props.id)
    }

    render() {
        return (

            <div>
                {
                    this.state.comments.map(com => (

                        <ListGroup className="d-flex" key={com._id}>
                            <ListGroup className="d-flex" key={com._id}>
                                <div className="d-flex justify-content-between">
                                    Rating: <StarRating rate={com.rate} />
                                    <DeleteBook Key={com._id} id={com._id} />
                                </div>
                            </ListGroup>
                            <ListGroup.Item className="justify-content-around">
                                {com.comment}
                            </ListGroup.Item>
                        </ListGroup>

                    ))
                }
                {/* <AddComment /> */}
            </div>

        )
    }
}
export default CommentArea