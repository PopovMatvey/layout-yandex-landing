import React from 'react';
import './css/style.css';
import { Footer } from '../Footer';
import { MainContent } from '../MainContent';

/**
 * Приложение
 * @returns Комопнент "Приложение"
 */
function App() {
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
