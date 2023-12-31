'use client';

import React from 'react';
import { styled } from 'styled-components';
import Cards from './Cards';
import { theme } from '../styles';
import { AnimationSVG, DesignSVG, PhotographySVG, CryptoSVG, BusinessSVG } from '../icons';

const StyledCardsSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.8rem;
  padding: 1rem 0rem 7rem;

  @media (max-width: 820px) {
    gap: 0.7rem;
    justify-content: center;
    padding: 0rem 0rem 6rem;
  }

  & .box-1 {
    width: 20rem;
    height: 19rem;
    border-radius: 0.9375rem;
    background: ${theme.gradient1};
    padding: 4rem 2rem 8rem;
    margin-top: 3rem;

    @media (max-width: 820px) {
      width: 21rem;
      height: 16rem;
      padding: 3.5rem 2rem 8rem;
    }

    @media (max-width: 764px) {
      height: 7.5rem;
      padding: 1.5rem 1.7rem;
      margin-top: 0;
    }

    & p {
      color: ${theme.light};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 2.5rem;

      @media (max-width: 820px) {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
  }
`;

function CardsSection() {
  return (
    <StyledCardsSection className="container">
      <div className="box-1">
        <p>Check out our most popular courses!</p>
      </div>
      <Cards
        icon={<AnimationSVG />}
        subtitle="Animation"
        label="Learn the latest animation techniques to create stunning motion design and captivate your audience."
      />
      <Cards
        icon={<DesignSVG />}
        subtitle="Design"
        label="Create beautiful, usable interfaces to help shape the future of how the web looks."
      />
      <Cards
        icon={<PhotographySVG />}
        subtitle="Photography"
        label="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
      />
      <Cards
        icon={<CryptoSVG />}
        subtitle="Crypto"
        label="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
      />
      <Cards
        icon={<BusinessSVG />}
        subtitle="Business"
        label="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
      />
    </StyledCardsSection>
  );
}

export default CardsSection;
