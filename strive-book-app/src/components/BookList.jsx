import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


class BookList extends Component {
    state = {
        query: "",
    };

    search = (e) => {
        this.setState({
            query: e.target.value,
        });
    };


    filterBookList = (list) => {
        const isFound = list.filter((book) =>
            book.title.toLowerCase().includes(this.state.query.toLowerCase())
        );

        console.log(isFound);
        return isFound;
    };


    render() {
        return (
            <Container>
                <div>
                    <Form.Group className="m-3">
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            value={this.state.query}
                            onChange={(e) => this.search(e)}
                        />
                    </Form.Group>
                </div>

                <div className="d-flex flex-wrap justify-content-around">
                    {
                        !this.state.query
                            ? this.props.list.map((books) => (
                                <SingleBook Key={books.asin} books={books} />
                            ))
                            : this.filterBookList(this.props.list).map((books) => (
                                <SingleBook Key={books._id} books={books} id={books.asin} />
                                // <SingleBook image={books.img} title={books.title} /> // this is same as the line above   
                            ))

                    }
                    {/* : this.props.list.filter(b => b.title.toLowerCase().includes(this.state.query)).map((b) => (
                  <SingleBook books={b} />
                  ))} */}


                </div>
            </Container>
        );
    }
}

export default BookList;
