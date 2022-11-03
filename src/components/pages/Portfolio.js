import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import projects from '../../projects';
import { MDBContainer } from 'mdb-react-ui-kit';

const styles = {
  color: {
    background: '#1C1C1C',
    color: '#f7f6f1',
    borderRadius: '8px'
  },
  btn: {
    background: '#72859a',
    border: 'none',
    color: '#f7f6f1'
  },
  
}

function Portfolio() {
  return (
    <MDBContainer  className='mt-5'>
      <Carousel>
        {projects.map((project) => (
          <Carousel.Item >
            <img 
              className="d-block w-100"
              src={project.image}
              alt={project.id}
            />
            <Carousel.Caption className='custMedia p-3' style={styles.color}>
              <h6>{project.name}</h6>
              <p className='custP'>{project.description}</p>
              <Button style={styles.btn} className='text-decoration-none me-3 custBtn' href={project.repo} target='_blank' variant="link">View the repository</Button>
              <Button style={styles.btn} className='text-decoration-none custBtn' href={project.liveSite} target='_blank' variant="link">View the live site/tutorial</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </MDBContainer>

  );
}

export default Portfolio;