import React from 'react';
import './LoadingAnimation.css';

export const LoadingAnimation = ({text, role}) => {
    return (
        <span role={role} tabIndex="0" aria-label="loading page">
        {text.split("").map(function(char, index){
          let style = {"animationDelay": (0.5 + index / 10) + "s"}
          return <span
            aria-hidden="true"
            key={index}
            style={style}>
            {char}
          </span>;
        })}
      </span>
    )
}