"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";

//children need to pass an array
const Marquee = ({children}) => {
  const marqueeRef = useRef(null);
  const marqueeInner = useRef(null);
  const marqueeContent = React.Children.toArray(children);

  const [clonedChildren, setClonedChildren] = useState(marqueeContent);


  // When it gets to the middle append
  // When it's in end is at starting position, remove element from list

//   useEffect(() => {
//     let duplicate = null;
//     marqueeContent.forEach((item) => {
//         // Need the inner part of the element
//         duplicate = React.cloneElement(item, {
//         "aria-hidden": "true",
//       });
//       console.log(duplicate);
//     });

//     children.push(duplicate);
//   }, [children]);

  
   useEffect(() => {
    const marqueeContent = React.Children.toArray(children);
    const clonedElements = marqueeContent.map((item, index) => (
        React.cloneElement(item, {
            key: `cloned-${index}`,
            'aria-hidden': 'true'
        })
    ))
    
    setClonedChildren(clonedElements);
  }, [children]);



  return (
    <div className="relative flex overflow-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {children}
      </div>
      <div className= "absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
