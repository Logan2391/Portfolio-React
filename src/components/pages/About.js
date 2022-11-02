import React from 'react';
import {
  MDBContainer,
} from 'mdb-react-ui-kit';

const styles = {
  color: {
    background: '#1C1C1C',
    color: '#f7f6f1',
    borderRadius: '8px'

  },
  content: {
    padding: '8px',
  }

}

export default function About() {
  return (
    <MDBContainer className='mt-5 pt-5'>
      <MDBContainer style={styles.color}>
        <div style={styles.content}>
          <h1>About Page</h1>
          <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </div>
      </MDBContainer>
    </MDBContainer>

  );
}