import React from 'react';
import './css/style.css';
import { Footer } from '../Footer';
import { useExempleState } from '../../hook/useStateExemple';
import { MainContent } from '../MainContent';

function App() {
  const { exemple } = useExempleState();

  console.log(exemple + "  nothing");

  return (
    <>
      <div className="App">
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
