import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navar from '../components/Navbar';
import Footer from '../components/Footer';

import noise from '../../static/images/noise.png';
import '../../static/fonts/greycliff/stylesheet.css';
import favicon from '../../static/images/favicon.ico';

const gutter = '10vw';
const spacer = '2.5rem';

const BaseContainer = styled.div`
  font-family: 'greycliff_cfbold';
  color: rgba(255, 255, 255, 0.95);
  box-sizing: border-box;
`;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  background-color: #121111;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    height: 180%;
    width: 180%;
    top: -40%;
    left: -40%;
    will-change: transform;
    transition: opacity .6s ease-out;
    background-image: url(${noise});
    animation: noiseAnimation 1000ms steps(4) infinite;
  }
  @keyframes noiseAnimation {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0)
    }
    10% {
      -webkit-transform: translate(-5%, -5%);
      transform: translate(-5%, -5%)
    }
    20% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%)
    }
    30% {
      -webkit-transform: translate(5%, -10%);
      transform: translate(5%, -10%)
    }
    40% {
      -webkit-transform: translate(-5%, 15%);
      transform: translate(-5%, 15%)
    }
    50% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%)
    }
    60% {
      -webkit-transform: translate(15%);
      transform: translate(15%)
    }
    70% {
      -webkit-transform: translateY(10%);
      transform: translateY(10%)
    }
    80% {
      -webkit-transform: translate(-15%);
      transform: translate(-15%)
    }
    90% {
      -webkit-transform: translate(10%, 5%);
      transform: translate(10%, 5%)
    }
    to {
      -webkit-transform: translate(5%);
      transform: translate(5%)
    }
  }
`;

const BaseLayout = ({ children }) => {
  return (
    <BaseContainer>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription}/>
        <meta name="keywords" content={config.siteKeywords}/>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Background />
      <Navar />
      {children()}
      <Footer />
    </BaseContainer>
  );
};

export default BaseLayout;
