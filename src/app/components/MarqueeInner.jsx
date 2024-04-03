import React from "react";

const MarqueeInner = ({key, src, alt}) => {
  return (
    <>
      <img
        key={key}
        src={src}
        alt={alt}
        className='aspect-square w-[50px] max-w-none'
      />
    </>
  );
};

export default MarqueeInner;
