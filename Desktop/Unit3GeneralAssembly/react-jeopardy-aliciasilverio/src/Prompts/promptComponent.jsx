import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const PromptComponent = (props) => {
    return (
        <div>
            <h2>Let's Play!</h2>
        
            <Button variant="outline-light"onClick={props.getQuestion}>Get Question</Button>
            <h3>Category: {props.question.category.title} </h3>
            <p>Points: {props.question.value}</p>
            <p>Answer: {props.question.question}</p>
            
        </div>
        
        
    )
}

export default PromptComponent;