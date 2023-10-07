import React from 'react';
import { MainContainer, Title } from './styled';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <MainContainer>
      <Title>Tarot Virtual</Title>
      <Cards />
    </MainContainer>
  );
}

export default App;
