import React, { Component } from "react";
import Image from "next/image";
import styled from 'styled-components';


class IntroImage extends Component {
  render() {
    return (
      <Wrapper>
        <Image
          src="/dnpna-logo.jpg"
          quality={100}
          layout="fill"
          alt="Avatar"
          priority
        />
      </Wrapper>
   );
  }
}

// 2257 × 1404

const Wrapper = styled.div`
  border-radius: 25px;
  width: 600px;
  height: 373px;
  @media (max-width: 400px) {
    width: 300px;
    height: 187px;
  }
  position: relative;
  overflow: hidden;
  margin:50px auto; /* centered */
`;

export default IntroImage;
