import React from 'react';
import {
  MDBInput,
  MDBContainer,
  MDBTextArea
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBContainer className='mt-5 w-50'>
      <div>
        <MDBInput placeholder='Name' id='formControlLg' type='text' />
        <br />
        <MDBInput placeholder='Email Address' id='formControlDefault' type='text' />
        <br />
        <MDBTextArea placeholder='Message' id='textAreaExample' rows={4} />
      </div>
    </MDBContainer>

  );
}