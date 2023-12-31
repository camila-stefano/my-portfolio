import React from 'react';

import { Hanken_Grotesk as hankenGrotesk } from 'next/font/google';
import { Wrapper, Card } from './styles';
import Result from './components/Result';
import Summary from './components/Summary';

export const HankenGrotesk = hankenGrotesk({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Results summary component',
};

export default function ResultsSummary() {
  return (
    <Wrapper className={HankenGrotesk.className}>
      <Card className="card">
        <Result />
        <Summary />
      </Card>
    </Wrapper>
  );
}
