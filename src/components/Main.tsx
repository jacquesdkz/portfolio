import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFTZzN1qJVygQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729507677465?e=1762387200&v=beta&t=SUW7J0autp3Xqc1SNyLnjoM6yr7lyMWIKKZNC2KPQYM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jacquesdkz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacques-dkz/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jacques Dukuzemungu</h1>
          <p>3D Software Engineer Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jacquesdkz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacques-dkz/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;