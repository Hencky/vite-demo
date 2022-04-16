import React from 'react';
import { Header } from '@/components/Header';
import { Header2 } from '@/components/Header2';
import { Nav } from '@/components/Nav';
import { Logo } from './components/Logo';

import { version } from '../package.json';

const url = import.meta.url;
console.log('url', url);

function App() {
  console.log('version', version);
  return (
    <React.Fragment>
      <Header />
      <Header2 />
      <Nav />
      <Logo />
    </React.Fragment>
  );
}

export default App;
