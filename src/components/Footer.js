import React, { Component } from 'react';
import styled from 'styled-components';

import SocialLink from './SocialLink';

const gutter = '10vw';
const spacer = '2.5rem';

const FooterContainer = styled.div`
  padding: 0 ${gutter} ${spacer};
`;

const Upcoming = styled.p`
  color: #8f8f8f;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  opacity: 0;
  transform: translateX(-50px);
  transition: 300ms ease-out 1450ms;
  &.mounted {
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(-50px);
  transition: 300ms ease-out 1600ms;
  a {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
  &.mounted {
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

class Footer extends Component {
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
      <FooterContainer>
        <Upcoming className={mounted ? 'mounted' : ''}> New site coming soon. </Upcoming>
        <SocialLinks className={mounted ? 'mounted' : ''}>
          <SocialLink type="mail" href="mailto:hello@teamgeek.co.za?Subject=Sup%20Geeks!" target="_top"/>
          <SocialLink type="twitter" href="https://twitter.com/weareteamgeek" target="_blank"/>
          <SocialLink type="instagram" href="https://www.instagram.com/teamgeek_/" target="_blank"/>
          <SocialLink type="dribbble" href="https://dribbble.com/teamgeek" target="_blank"/>
          <SocialLink type="facebook" href="https://facebook.com/weareteamgeek/" target="_blank"/>
          <SocialLink type="linkedin" href="https://www.linkedin.com/company/teamgeek/" target="_blank"/>
        </SocialLinks>
      </FooterContainer>
    );
  }
}

export default Footer;