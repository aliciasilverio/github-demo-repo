import React from 'react';
import './sideMenuComponent.css';

const SideMenuComponent = () => {
    const listItems = ["Dashboard", "Widget", "Reviews", "Customers", "Online Analysis", "Settings"]
return (
    <aside id="side-menu-component">
        <ul>
            {listItems.map((item, index)=> {
                return <li key={index}>{item}</li>
                })
            }
        </ul>
    </aside>
)
}

export default SideMenuComponent