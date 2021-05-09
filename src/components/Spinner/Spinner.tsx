import React, { CSSProperties } from "react";
import Lottie, { Options } from "react-lottie";
import spinner from "../../lottie/ios-loader.json";

interface Props {
  height?: number;
  width?: number;
  style?: CSSProperties;
}

function Spinner({ height, width, style }: Props) {
  const options: Options = {
    animationData: spinner,
    loop: true,
    autoplay: true,
  };

  const styles: CSSProperties = {
    cursor: "auto",
    margin: "30px auto",
    ...style,
  };

  const dimensions: number = 40;

  return (
    <Lottie
      style={styles}
      width={width || dimensions}
      height={height || dimensions}
      options={options}
    />
  );
}

export default Spinner;
