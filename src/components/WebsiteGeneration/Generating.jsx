import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
function Generating() {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            navigate('/ready')
        }, 4000);
    },[navigate])
  return (
    <div
      className="wrapper"
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        className="typing-demo text-5xl font-bold tracking-wider"
        style={{
          width: "24ch",
          animation:
            "typing 3s steps(22), blink .5s step-end infinite alternate",
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "3px solid",

          color: "white",
        }}
      >
        Your website is on the way...
      </div>
    </div>
  );
}

export default Generating;

// Define keyframes as a style tag inside the same component
const keyframes = `
  @keyframes typing {
    from {
      width: 0;
    }
  }
  
  @keyframes blink {
    50% {
      borderColor: transparent;
    }
  }
`;

// Apply the keyframes using the style tag
const styleTag = document.createElement("style");
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);
