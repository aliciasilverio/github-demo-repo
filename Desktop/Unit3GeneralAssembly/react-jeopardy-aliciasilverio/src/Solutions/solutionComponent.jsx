import React from "react";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const SolutionComponent = (props) => {
    const revealQuestion = () => {
        props.setIsRevealed(true);
    }
    return(
        <div>
            <Button variant="outline-light" onClick={revealQuestion}>Reveal Question</Button>
            {/* is it revealed? If yes display answer, if not, display nothing */}
            <p>{props.isRevealed ? props.answer : ""}</p>
                       
        </div>
    )
}

export default SolutionComponent;