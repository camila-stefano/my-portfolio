import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <Link href="/projects">Proyectos</Link>
    </nav>
  );
}
