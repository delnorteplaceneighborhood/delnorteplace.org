import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    name: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xdobgerz',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Main>
      <Form onSubmit={handleOnSubmit} accept-charset="utf-8">
        <FormInput>
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            type="name"
            name="_replyto"
            onChange={handleOnChange}
            placeholder="First and Last"
            required
            value={inputs.name}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            type="email"
            name="_replyto"
            placeholder="email@domain.tld"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="message">Message</label>
          <TextArea
            id="message"
            name="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </FormInput>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </Button>
      </Form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Main>
  );
};

const Main = styled.main`
  max-width: 80%;
  @media (max-width: 400px) {
    max-width: 100%;
    font-size: small;
  }
  margin:20px auto;
  border-radius: 5px;
  background-color: var(--color-neutral-100);
  padding: 20px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* fixed width */
`;

const Button = styled.button`
  width: 100%;
  background-color: var(--color-primary-300);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;


`;
const Form = styled.form`
  margin: 0 auto;
  max-width: 100%;
`;

const FormInput = styled.section`
  padding
`;

// /* Style inputs */
// input[type = text], select {
//   width: 100 %;
//   padding: 12px 20px;
//   margin: 8px 0;
//   display: inline - block;
//   border: 1px solid #ccc;
//   border - radius: 4px;
//   box - sizing: border - box;
// }

export default ContactForm;