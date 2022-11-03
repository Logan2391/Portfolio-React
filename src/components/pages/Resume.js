import React from 'react';
import pdf from '../../images/Resume-Logan Schoerner.pdf'
import {
  MDBContainer,
} from 'mdb-react-ui-kit';

const styles = {
  color: {
    background: '#1C1C1C',
    color: '#f7f6f1',
    borderRadius: '8px',

  },
}

export default function Resume() {
  return (
    <MDBContainer style={styles.color} className='px-4 py-3 mt-4 custWid'>

      <h5>Reusme</h5>
      <ul >
        <p>Download My : <a className='text-decoration-none textC' href={pdf} download>Resume</a></p>
      </ul>
      <h5>Front-end Proficiencies</h5>
      <ul className='textR'>
        <li>React</li>
        <li>Handlebars</li>
        <li>CSS3</li>
        <li>JavaScript ES6+</li>
        <li>HTML5</li>
        <li>BootStrap</li>
        <li>Tailwinds</li>
        <li>Bulma</li>
        <li>Responsive Design</li>
      </ul>
      <h5>Back-end Proficiencies</h5>
      <ul className='textR'>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>NoSql</li>
      </ul>


    </MDBContainer>
  );
}