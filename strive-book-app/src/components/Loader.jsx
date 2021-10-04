import { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { FaStar } from "react-icons/all";

class Loader extends Component {
    render() {
        return (
            <>
                <Button><i className="FaStar"></i></Button>
                <FaStar className='star'></FaStar>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            </>
        )
    }
}

export default Loader