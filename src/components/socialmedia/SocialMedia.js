import React from 'react';
import './SocialMedia.css';

export const SocialMedia = ({employee, index}) => {
    return (
        <div className="social-media-container">
            
        {employee.gitHub !== null ? (
          <div className="github-enabled" aria-label={`link to ${employee.name} github page`}>
            <a
              href={`https://github.com/${employee.gitHub}`}
              tabIndex={index + 4} >
               <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        ) : (
          <div className="github-disabled">
            <button href="#" onClick={(e) => e.preventDefault()}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </button>
          </div>
        )}

        {employee.twitter !== null ? (
          <div className="twitter-enabled" aria-label={`link to ${employee.name} twitter page`}>
            <a
              href={`https://twitter.com/${employee.twitter}`}
              tabIndex={index + 4}>
              <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        ) : (
          <div className="twitter-disabled">
            <button href="#" onClick={(e) => e.preventDefault()}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </button>
          </div>
        )}

        {employee.linkedIn !== null ? (
          <div className="linkedin-enabled" aria-label={`link to ${employee.name} linkedIn page`}>
            <a
              href={`https://linkedin.com${employee.linkedIn}`}
              tabIndex={index + 4}>
              <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin-in circle fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        ) : (
          <div className="linkedin-disabled">
            <button href="#" onClick={(e) => e.preventDefault()}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin-in circle fa-stack-1x fa-inverse"></i>
              </span>
            </button>
          </div>
        )}
      </div>
    )
}
