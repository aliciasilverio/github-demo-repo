import React, { Component } from 'react';
import './topStatsComponent.css';
import RatingComponent from './ratingComponent/ratingComponent';
import ReviewComponent from './reviewComponent/reviewComponent';
import SentimentComponent from './sentimentComponent/sentimentComponent';

const TopStatsComponent = (props)=> {
    return(
        <section id="top-stats-component">
        <div id='review-component-styling'>
            <ReviewComponent reviews={props.numbers.reviews}></ReviewComponent>
        </div>
        <div id='rating-component-styling'>
            <RatingComponent rating={props.numbers.rating}></RatingComponent>
        </div>
        <div id='sentiment-component-styling'>
            <SentimentComponent sentimentAnalysis={props.numbers.sentimentAnalysis}></SentimentComponent>
        </div>
        </section>
    )
}

export default TopStatsComponent;