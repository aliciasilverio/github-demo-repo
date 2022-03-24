import React from "react";

const RatingComponent = (props) => {
    return(
        <section>
            <h3>Rating</h3>
            <p>{props.rating}</p>
        </section>
    )    
}


export default RatingComponent;