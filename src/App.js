import React from "react";
import { render } from "react-dom";
import LazyHero from 'react-lazy-hero';
import image1 from "./assets/background/white-flower-pot.jpg";
import Logo from "./assets/blackPerson2.png"
import Logo2 from "./assets/blackPerson1.png"
import styled from 'styled-components'
import './Fonts.css'
import Layout from './components/Layout'

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

  .centerRelative{
    position:relative;
    top: 75px;
  }

  
`;



function App() {
  return (
    <Layout>
      <Styles style={{ width: "100%" }}>
        <LazyHero transitionDuration={0} minHeight="35%" opacity={0} parallaxOffset={100} imageSrc={image1}>
          <div className="d-flex justify-content-center centerRelative" >
            <h1 className="title">
              Skeggis <br />
              <span style={{ marginLeft: "100px" }}>Software</span>
            </h1>
          </div>
          <div className="d-flex justify-content-center" >
            <div className="d-flex justify-content-center" style={{ marginTop: "75px", marginRight:"20px" }}>
              <img src={Logo}></img>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "75px" }}>
              <img src={Logo2}></img>
            </div>
          </div>


        </LazyHero>

        <div className="container d-flex flex-column align-content-center">

          <div className="d-flex justify-content-center" style={{ marginTop: "50px" }}>
            <p className="text">
              Skeggis er íslenskt hugbúnaðarfyrirtæki sem sérhæfir sig í hönnun og þróun snjallra vefsíðna og smáforrita fyrir síma.
                Við staðhæfum að <b>öll</b> fyrirtæki eiga að hafa fallega vefsíðu sem auðvelt er að nota svo viðskiptavinir geti með engu erfiði
                  fundið og skoðað hvað þau hafa upp á að bjóða.
                </p>
          </div>

          <div className="d-flex justify-content-center">
            <h3 className="smallTitle"> <b>App þróun, hönnun og hýsing vefsíðna,<br /> hugbúnaðarlausnir fyrir þig og þína viðskiptavini.</b> </h3>
          </div>
        </div>
        <div style={{ height: 1500 }}></div>
        {/* <Parallax bgImage={image1} strength={500} >
          
        </Parallax> */}
      </Styles>
    </Layout>

  );
}

export default App;
