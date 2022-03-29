import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const ScoreBoardComponent = (props) =>{
    return (
        <section>
            <h2>Score: <span id="current-score">{props.score}</span></h2>
            <Button variant="primary" onClick={props.increaseScore}>Increase</Button>{''}
            <Button variant="danger" onClick={props.decreaseScore}>Decrease</Button>
            <Button variant="dark"onClick={props.resetScore}>Reset</Button>
        </section>
    )
}

export default ScoreBoardComponent;