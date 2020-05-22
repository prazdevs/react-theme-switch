import React from 'react';

import ThemedTitle from './ThemedTitle';
import ThemeToggler from './ThemeToggler';

function App() {
  return (
    <div className="App">
      <ThemedTitle>Let's build a theme switcher</ThemedTitle>
      <ThemeToggler />
    </div>
  );
}

export default App;
