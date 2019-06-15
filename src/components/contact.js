import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact_me">
        <h2>Contact</h2>
        <p>
          Email:
          <a
            href="mailto:zeraiadhanom@gmail.com"
            title="Email me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope-open" syle="font-size:30px">
              Email
            </i>
          </a>
        </p>
        <p>
          Check github{' '}
          <a href="https://github.com/zeraiadhanom/" rel="noopener noreferrer">
            github
          </a>
          .
        </p>
        <p>
          Linkedin{' '}
          <a
            href="https://www.linkedin.com/in/zerai-adhanom/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin-square" syle="font-size:30px">
              Linkedin
            </i>
          </a>
        </p>
        <p>
          Publications:
          <a
            href="https://researchspace.ukzn.ac.za/handle/10413/3179"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin-square" syle="font-size:30px">
              Media and Communcation MA thesis-Summary
            </i>
          </a>
        </p>
        <p>
          Publications:
          <a
            href="http://researchspace.ukzn.ac.za/xmlui/bitstream/handle/10413/3179/Adhanom_Zerai_Araia_2004.pdf?sequence=1&isAllowed=y"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fa fa-linkedin-square"
              syle="font-size:30px"
              rel="noopener noreferrer"
            >
              Media and Communcation MA thesis
            </i>
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
