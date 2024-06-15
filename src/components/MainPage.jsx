import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const MainPage = () => {
  return (
    <main className="container mx-auto my-20 p-5 transparent-box rounded text-center text-white">
      <h2 className="text-4xl font-bold mb-5">Harkunwar Singh</h2>
      <p>Software Developer | B.Tech in Information Technology</p>
      <p>Phone: +91-96543-27736</p>
      <div className="my-5">
        <a href="https://wa.me/919654327736" className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Chat on WhatsApp</a>
      </div>
      <div className="space-y-4">
        <a href="mailto:harkunwarsingh7@gmail.com" className="action-btn block mx-auto text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="https://www.linkedin.com/in/harkunwarsingh/" className="action-btn block mx-auto text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/HarkunwarS" className="action-btn block mx-auto text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="/resume.pdf" className="action-btn block mx-auto text-white" download>
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
        <a href="/resume.pdf" className="action-btn block mx-auto text-white" target="_blank">
          <FontAwesomeIcon icon={faDownload} /> Preview Resume
        </a>
      </div>
    </main>
  );
};

export default MainPage;