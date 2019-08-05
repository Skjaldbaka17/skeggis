import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import image1 from "./assets/background/blue-bricks.jpg";
import Logo from "./assets/single-beard.png"
import styled from 'styled-components'
import './Fonts.css'
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Styles = styled.div`
  div {
    font-family: "sans-serif";
    text-align: "center";
  }

  img{
    height:200px;
    /*position: fixed;*/
    /*top: 50px;*/
    widht:200px;
  }
`;



function App() {
  return (
    <Styles>
    <Parallax bgImage="./assets/background/blue-bricks.jpg" strength={500} className="d-flex justify-content-center">
      <div style={{ height: 2000 }}>
      <h1 className="title">Skeggis <br/>
        <span style={{marginLeft: "25px"}}>Software</span>
</h1>
      <Parallax strength={500} className="d-flex justify-content-center">
      <img src={Logo}></img>
      </Parallax>
        
        
      </div>
    </Parallax>
    {/* <h1>| | |</h1>
    <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image1} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax> */}
    {/* <h1>| | |</h1>
    <Parallax
      bgImage={image1}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2> */}
  </Styles>
  );
}

export default App;
