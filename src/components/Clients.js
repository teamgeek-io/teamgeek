import React, { Component } from 'react';
import styled from 'styled-components';

import discovery from '../../static/images/clients/discovery.png';
import mm from '../../static/images/clients/mm.png';
import bettr from '../../static/images/clients/bettr.png';
import betalabs from '../../static/images/clients/betalabs.png';
import apple from '../../static/images/clients/apple.png';
import accenture from '../../static/images/clients/accenture.png';
import wunderman from '../../static/images/clients/wunderman.png';

const gutter = '10vw';
const spacer = '2.5rem';

const ClientContainer = styled.div`

`;

const ClientIntro = styled.p`
  font-family: 'greycliff_cflight';
  font-size: 1rem;
  letter-spacing: 0.5rem;
  line-height: 2rem;
  margin-bottom: ${spacer};
  color: #8f8f8f;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 300ms ease-out 1150ms;
  &.mounted {
    transform: translateX(0);
    opacity: 1;
  }
  @media (min-width: 768px) {
    margin-bottom: calc(${spacer} * 1.5);
    max-width: 75%;
  }
`;

const ClientList = styled.div`
  display: grid;
  grid-template: repeat(4, auto) / repeat(2, auto);
  justify-content: space-between;
  justify-items: start;
  align-items: center;
  margin-bottom: ${spacer};
  opacity: 0;
  transform: translateX(-50px);
  transition: 300ms ease-out 1300ms;
  img {
    max-width: 90%;
    height: auto;
    &:nth-child(7) {
      grid-column: span 2;
      justify-self: center;
    }
  }
  &.mounted {
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    grid-template: repeat(2, auto) / repeat(12, auto);
    margin-bottom: calc(${spacer} * 1.5);
    justify-items: center;
    img {
      grid-column: span 3;
      &:nth-last-child(-n+3) {
        grid-column: span 4;
      }
    }
  }
  @media (min-width: 992px) {
    grid-template: auto / repeat(7, auto);
    img {
      grid-column: span 1;
      &:nth-last-child(-n+3) {
        grid-column: span 1;
      }
    }
  }
`;

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  render() {
    let { mounted } = this.state;
    return (
      <ClientContainer>
        <ClientIntro className={mounted ? 'mounted' : ''}>
          We’re a family of creatives, coders, story-tellers and problem-solvers
          working with today's leading forward-thinking brands.
        </ClientIntro>
        <ClientList className={mounted ? 'mounted' : ''}>
          <img src={discovery} alt="Discovery" />
          <img src={mm} alt="Discovery" />
          <img src={bettr} alt="Discovery" />
          <img src={betalabs} alt="Discovery" />
          <img src={apple} alt="Discovery" />
          <img src={accenture} alt="Discovery" />
          <img src={wunderman} alt="Discovery" />
        </ClientList>
      </ClientContainer>
    );
  }
}

export default Clients;