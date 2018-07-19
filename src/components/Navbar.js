import React, { Component } from 'react';
import styled from 'styled-components';

import logo_p from '../../static/images/logo-p.svg';
import logo_t from '../../static/images/logo-t.svg';
import party_parrot from '../../static/images/parrot.gif';

const gutter = '10vw';
const spacer = '2.5rem';

const NavbarContainer = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  padding: ${spacer} ${gutter};
  margin-bottom: ${spacer};
  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  span {
    position: relative;
    height: 150px;
    width: 150px;
    &:after, &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:before {
      transition: 500ms ease-out;
      transform: rotate(-180deg);
      background: url(${logo_p}) center center / 148px auto no-repeat;
      opacity: 0;
    }
    &:after {
      transition: 250ms ease-out;
      transition-delay: 250ms;
      background: url(${logo_t}) center center no-repeat;
      transform: translateX(-30px);
      opacity: 0;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: auto;
      opacity: 0;
      transition: 250ms ease-out;
      transition-delay: 300ms;
    }
  }
  &.mounted {
    span {
      &:before {
        transform: rotate(0deg);
        opacity: 1;
      }
      &:after {
        transform: translateX(0px);
        opacity: 1;
      }
      &:hover {
        &:after {
          transition-delay: 0ms;
          transform: translateX(-50px);
        }
        img {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    justify-content: flex-start;
  }
`;

const Social = styled.div`
  display: none;
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  transition: all 250ms ease-out;
  transition-delay: 1000ms;
  a {
    text-decoration: none;
    span {
      font-size: 1rem;
      color: #bebebe;
      position: relative;
    }
    &:focus, &:active {
      outline: none;
    }
  }
  &.unmounted {
    opacity: 0;
    transform: translateX(-30px);
  }
  &.mounted {
    transform: translateX(0);
    opacity: 1;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    a {
      padding-left: ${spacer};
      &:first-child {
        padding-left: 0;
      }
      &:nth-child(2) {
        padding-left: calc(2 * ${spacer});
      }
      span {
        transition: all 250ms ease-out;
      }
      &:hover {
        text-decoration: none;
        span {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 0);
  }

  render() {
    return (
      <NavbarContainer>
        <Logo className={this.state.mounted ? 'mounted' : 'unmounted'}>
          <span>
            <img src={party_parrot} alt="Party or die"/>
          </span>
        </Logo>
        <Social className={this.state.mounted ? 'mounted' : 'unmounted'}>
          <a href="mailto:hello@teamgeek.co.za?subject=Ola Geeks!" target="_top"><span>EMAIL</span></a>
          <a href="https://www.facebook.com/weareteamgeek/" target="_blank"><span>FB</span></a>
          <a href="https://www.instagram.com/helloteamgeek/" target="_blank"><span>IG</span></a>
          <a href="https://twitter.com/weareteamgeek" target="_blank"><span>TW</span></a>
        </Social>
      </NavbarContainer>
    );
  }
}

export default Navbar;
