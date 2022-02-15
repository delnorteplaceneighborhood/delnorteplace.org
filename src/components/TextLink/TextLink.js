import React, { Component } from 'react';
import styled from 'styled-components';
import Link from "next/link";


const TextLink = ({href, text}) => {
    return (
      <Wrapper>
        <Link href={href}>{text}</Link>
      </Wrapper>
    );
  };

const Wrapper = styled.div`
  font-weight: var(--font-weight-medium);

  & > a {
    color: var(--color-primary-300);
    text-decoration: underline;
  }
`;

export default TextLink;
