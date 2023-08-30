'use client';

/* eslint-disable max-len */

import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 21.875rem;
  height: 20.125rem;
  border-radius: 0.9375rem;
  background: ${theme.light};
  padding: 4rem 2rem 2.5rem;
  position: relative;

  & .img {
    position: absolute;
    top: -1.5rem;
  }

  & .subtitle {
    color: ${theme.dark};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2rem;
  }

  & .label {
    color: ${theme.grey};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
  }

  & .link {
    color: ${theme.pink};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    transition: all 0.5s ease;

    &:hover {
      color: ${theme.lightPink};
    }
  }
`;

function Cards({ icon, subtitle, label }) {
  return (
    <StyledCard className="boxes">
      <span className="img">{icon}</span>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="label">{label}</p>
      <Link className="link" href="/projects/skilled-elearning-landing-page/">
        Get Started
      </Link>
    </StyledCard>
  );
}

export default Cards;
