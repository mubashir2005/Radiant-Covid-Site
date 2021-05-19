import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import sadAnimation from "../../lottie/sad-animation.json";

interface Props {
  errorMessage: string;
  show: boolean;
}

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Error({ errorMessage, show }: Props) {
  return (
    <>
      {show && (
        <ErrorMessage className={"color-gray"}>
          <Lottie
            options={{
              animationData: sadAnimation,
              loop: false,
              autoplay: false,
            }}
            width={50}
            height={50}
            style={{
              margin: "0 10px",
            }}
          />
          {errorMessage}
        </ErrorMessage>
      )}
    </>
  );
}

export default Error;
