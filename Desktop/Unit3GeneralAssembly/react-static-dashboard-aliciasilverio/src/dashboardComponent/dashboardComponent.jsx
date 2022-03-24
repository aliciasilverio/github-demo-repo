import React from 'react';
import {useState} from 'react';
import './dashboardComponent.css';
import TopStatsComponent from './topStatsComponent/topStatsComponent';
import BottomStatsComponent from './bottomStatsComponent/bottomStatsComponent';

const DashboardComponent = () => {
    const [numbers, setNumbers] = useState({
        reviews: 45,
        rating: 4.5,
        sentimentAnalysis: [192, 394, 567],
        websiteVisitors: 1,
    })
    return (
        <main id="dashboard-component">
            <TopStatsComponent numbers={numbers}></TopStatsComponent>
            <BottomStatsComponent visitors={numbers.websiteVisitors}></BottomStatsComponent>
        </main>
    )
}

export default DashboardComponent;