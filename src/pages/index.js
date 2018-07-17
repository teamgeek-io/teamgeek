import React, { Component } from 'react';
import styled from 'styled-components';

import Clients from '../components/Clients.js';

const gutter = '10vw';
const spacer = '2.5rem';

const randomDelay = () => {
  const min = 100;
  const max = 400;
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${val}ms`;
}

const HomeContainer = styled.div`
  padding: 0 ${gutter};
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: ${spacer};
  transition: all 300ms ease-out 1000ms;
  span {
    position: relative;
    font-size: 2rem;
    letter-spacing: 1vw;
    padding-right: 3vw;
  }
  @media (min-width: 768px) {
    margin-bottom: calc(${spacer} * 1.5);
    span {
      font-size: 2.5rem;
    }
  }
  /* on mount transition */
  &.unmounted {
    opacity: 0;
    transform: translateX(-50px);
  }
  &.mounted {
    opacity: 1;
    transform: translateX(0px);
  }
  /* keyframe animations */
  @keyframes glitch-color {
    0% {
      opacity: 1;
    }
    5.9% {
      left: -4px;
    }
    6% {
      opacity: 0;
      z-index: 1;
    }
    11.9%{
      left: 10px;
    }
    12% {
      opacity: 1;
    }
    24%, 100% {
      opacity: 0;
      z-index: -1;
    }
  }
  @keyframes glitch-primary {
    0% {
      transform: translate3d(8vw, -3vh, 0);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    2% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    4% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    6% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    7% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    8% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    9% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    9.9% {
      transform: translate3d(8vw, -3vh, 0);
    }
    10%, 100% {
      transform: translate3d(0,0,0);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
  @keyframes glitch-secondary {
    0% {
      transform: translate3d(-2vw,3vh,0);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    2% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    4% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    6% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    7% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    8% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    9% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    9.9% {
      transform: translate3d(-2vw,3vh,0);
    }
    10%, 100% {
      transform: translate3d(0,0,0);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

class BasePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
    this.renderWord = this.renderWord.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  renderWord = (word, index) => {
    const Word = styled.span`
      animation-name: glitch-primary;
      animation-duration: 6000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomDelay()};
      &:nth-child(odd) {
        animation-name: glitch-secondary;
      }
      &:after {
        z-index: -1;
        content: attr(data-text);
        position: absolute;
        top: 4px;
        left: -4px;
        width: 100%;
        height: 100%;
        background: transparent;
        color: rgba(255, 0, 0, 0.35);
        animation: glitch-color 6000ms infinite linear;
      }
    `;
    return (
      <Word key={index} data-text={word}>{word}</Word>
    );
  }

  render() {
    const phrase = `WE HELP COMPANIES RETHINK, DESIGN AND BUILD THE PRODUCTS AND BRANDS THAT SHAPE THE WAY WE LIVE TODAY.`
    const phraseArray = Array.from(phrase.split(' '));
    return (
      <HomeContainer>
        <Header className={this.state.mounted ? 'mounted' : 'unmounted'}>
          {phraseArray.map((word, index) => this.renderWord(word, index))}
        </Header>
        <Clients />
      </HomeContainer>
    );
  }
}

export default BasePage;