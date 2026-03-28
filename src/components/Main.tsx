import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + "/dp.jpg"} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Mohitvasnani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohit-vasnani-6b11041b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/MohitVasnani47" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.threads.com/@whatnowdrpgn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faThreads} /></a>
            
          </div>
          <h1>Mohit Vasnani</h1>
          <p>Full Stack Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Mohitvasnani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohit-vasnani-6b11041b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/MohitVasnani47" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.threads.com/@whatnowdrpgn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faThreads} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;