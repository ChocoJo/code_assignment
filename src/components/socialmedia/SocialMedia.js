import "./SocialMedia.css";

export const SocialMedia = ({ employee, index }) => {

  const handleKeyPress = (e, socialmedia) => {
    console.log('socialmedia', socialmedia);
    console.log('event', e);
    if (e.key === 'Enter') {
      switch(socialmedia) {
        case 'gitHub':
          window.open(`https://github.com/${employee.gitHub}`,"_self");
          break;
        case 'twitter':
          window.open(`https://twitter.com/${employee.twitter}`,"_self");
          break;
        case 'linkedin':
          window.open(`https://linkedin.com${employee.linkedIn}`,"_self");
          break;
        default: 
          void(0);
      }  
    }
  };

  return (
    <div className="social-media-container">
      {employee.gitHub !== null ? (
        <div
          onKeyPress={e => handleKeyPress(e, 'gitHub')}
          className="github-enabled"
          aria-label={`link to github page`}
          tabIndex={index + 4}
        >
          <button className="github-button">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
            </button>
        </div>
      ) : (
        <div className="github-disabled" tabIndex="-1">
          <button href="#" onClick={(e) => e.preventDefault()}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </button>
        </div>
      )}

      {employee.twitter !== null ? (
        <div
        onKeyPress={e => handleKeyPress(e, 'twitter')}
        tabIndex={index + 4}
          className="twitter-enabled"
          aria-label={`link to twitter page`}
        >
          <button className="twitter-button">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
            </button>
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
        <div
          onKeyPress={e => handleKeyPress(e, 'linkedin')}
          tabIndex={index + 4}
          className="linkedin-enabled"
          aria-label={`link to linkedIn page`}
        >
          <button className="linkedin-button">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin-in circle fa-stack-1x fa-inverse"></i>
            </span>
            </button>
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
  );
};
