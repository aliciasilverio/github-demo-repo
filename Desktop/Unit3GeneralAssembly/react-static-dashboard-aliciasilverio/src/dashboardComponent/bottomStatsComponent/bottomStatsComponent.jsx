import React, { Component } from "react";

const BottomStatsComponent = (props) => {
    return (
        <section id="bottom-stats-component">
            <h3>Website Visitors</h3>
            <p>{props.visitors}</p>
        </section>
    );
};

export default BottomStatsComponent;