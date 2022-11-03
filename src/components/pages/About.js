import React from 'react';
import image from '../../images/IMG_0437.png'
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
  },
  pic: {
    borderRadius: '8px'
  }

}

export default function About() {
  return (
    <MDBContainer className='mt-2 pt-5'>
      <MDBContainer style={styles.color}>
        <div className='text-center' style={styles.content}>
          <img style={styles.pic} className='w-25 ' alt='' src={image} />
          <h5>About Me</h5>
          <p className='custAbout'>
            I am a full-stack web developer leveraging my customer service background to build a more intuitive user
            experience on the web. I recently earned a certificate in full stack development from the
            University of Utah Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, and responsive web
            design. I am an innovative problem solver passionate about developing apps, with a focus
            on mobile-first design and development. With each project, my aim is to best engage my
            audience for an impactful user experience. I applied aspects of UX/UI and agile development in a
            recent project. Im excited to
            leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the
            web.
          </p>
        </div>
      </MDBContainer>
    </MDBContainer>

  );
}