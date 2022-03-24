import React from "react";

const SentimentComponent = (props) => {
    return(
        <section>
            <h3>Sentiment</h3>
            <ul>
                {props.sentimentAnalysis.map((number, index)=>{
                   return<li key={index}>{number}</li> 
                })}
            </ul>
        </section>
    )
}

export default SentimentComponent