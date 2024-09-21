import React, { useEffect } from "react";

const Title = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("This is set interval");
    }, 1000);
    return () => {
        console.log("unMounting")
      clearInterval(interval); //This is will clear the interval when unMount
    }; 
  }, []);

  return (
    <div>
      <h1>This is a title</h1>
    </div>
  );
};

export default Title;
