import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


class BookList extends Component {

    // to get the same result i can use "state" value instead of the prop value

    state = {
        selected: false,
        bookId: null
    };

    // search = (e) => {
    //     this.props.onChange(e);
    // };


    filterBookList = (list) => {
        const isFound = list.filter((book) =>
            book.title.toLowerCase().includes(this.props.query.toLowerCase())
        );

        console.log(isFound);
        return isFound;
    };

    // getSelectedBook =  ()

    render() {
        return (
            <Container>
                <div>
                    <Form.Group className="m-3">
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            value={this.props.value}
                            onChange={(e) => this.props.onChange(e)}
                        />
                    </Form.Group>
                </div>

                <div className="d-flex flex-wrap justify-content-around">
                    {
                        !this.props.query
                            ? this.props.list.map((books) => (
                                <SingleBook Key={books.asin} books={books}
                                    selected={this.state.selected}
                                    onClick={(e) => this.setState({
                                        selected: !this.state.selected,
                                        bookId: books.asin
                                    })}
                                />
                            ))
                            : this.filterBookList(this.props.list).map((books) => (
                                <SingleBook Key={books._id} books={books} id={books.asin}
                                    selected={this.state.selected}
                                    onClick={(e) => this.setState({ selected: !this.state.selected })}
                                />
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
