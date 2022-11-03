import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';



export default function App() {
  return (
    <MDBFooter className='text-center text-white position-sticky mt-2' >
      <MDBContainer className='py-2'>
        <section className='mb-1'>
          
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com/in/logan-schoerner-19179223a/'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fa-linkedin fs-2' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://github.com/Logan2391'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fa-github fs-2' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://stackoverflow.com/users/19112070/logan-schoerner'
            target="_blank"
            role='button'
          >
            <MDBIcon fab icon="stack-overflow fs-2" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}