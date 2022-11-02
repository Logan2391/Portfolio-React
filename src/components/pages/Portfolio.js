import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projects from '../../projects';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

const styles = {
  color: {
    background: '#1C1C1C',
    color: '#f7f6f1',
    borderRadius: '8px'
  },
  btn: {
    background: '#72859a',
    border: 'none',
    
  },
  textColor: {
    color: '#f7f6f1'
  },
  mediaQ: {
    @meida (maxWidth: '529px') {
      
    }
  }
}

function Portfolio() {
  return (
    <MDBContainer className='mt-5'>
      <Carousel >
        {projects.map((project) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.image}
              alt={project.id}
            />
            <Carousel.Caption style={styles.color}>
              <h6>{project.name}</h6>
              <p>{project.description}</p>
              <MDBBtn style={styles.btn} className='me-3'><a style={styles.textColor} className='text-decoration-none' href={project.repo}>View the repository</a></MDBBtn>
              <MDBBtn style={styles.btn}><a style={styles.textColor} className='text-decoration-none' href={project.liveSite}>View the live site/tutorial</a></MDBBtn>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </MDBContainer>

  );
}

export default Portfolio;