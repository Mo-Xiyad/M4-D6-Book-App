import { Component } from 'react'

class StarRating extends Component {

    render() {
        return (
            <div className="star-rating">
                {[...Array(parseInt(this.props.rate))].map(() => {
                    return (
                        // <span className="star">&#9733;</span>
                        <span className="star">&#11088;</span>
                    );
                })}
            </div >
        );
    }
};

export default StarRating