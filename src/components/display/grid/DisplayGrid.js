import React from 'react'
import { Card } from '../../card/Card';
import { BrowserView, MobileView } from 'react-device-detect';
import './DisplayGrid.css';

export const DisplayGrid = ({employees}) => {
    return (
        <>
        <BrowserView className="desktop">
        <div className="row">
            {employees.map((employee, index) => (
                <Card 
                key={employee.name}
                employee={employee}
                index={index}
                />
            ))}
        </div>
        </BrowserView>
        <MobileView className="mobile">
        <div className="row">
        {employees.map((employee, index) => (
            <Card 
            key={employee.name}
            employee={employee}
            index={index}
            />
        ))}
    </div>
    </MobileView>
    </>
    )
}
