import React from "react";

const ReviewComponent = (props) => {
    return(
        <section>
            <h3>Reviews</h3>
            <p>{props.reviews}</p>
        </section>
    )
}

export default ReviewComponent