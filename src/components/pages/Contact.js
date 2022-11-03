import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  MDBInput,
  MDBContainer,
  MDBTextArea
} from 'mdb-react-ui-kit';
import { validateEmail } from '../../utils/helpers';

const styles = {
  btn: {
    background: '#72859a',
    border: 'none',
    color: '#f7f6f1'
  },
}

function Contact() {
  const [nameN, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMesage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMesage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMesage('');
  };

  return (
    <div>
      <form>
        <MDBContainer className='mt-5 w-50'>
          <div>
            <MDBInput placeholder='Name' name="name" onChange={handleInputChange} value={nameN} type='text' />
            <br />
            <MDBInput placeholder='Email Address' name="email" onChange={handleInputChange} value={email} type='text' />
            <br />
            <MDBTextArea placeholder='Message' name="message" onChange={handleInputChange}  value={message} type='text' rows={4} />
          </div>
          <Button style={styles.btn} type='button' className='text-decoration-none mt-2' href='#' target='_blank' onClick={handleFormSubmit}>Submit</Button>
        </MDBContainer>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Contact;