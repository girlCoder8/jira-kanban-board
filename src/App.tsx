import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import KanbanBoard from './components/KanbanBoard';
import { ModalProvider } from './hooks/useModal';
import GlobalStyle from './styles/global';
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <div className="App">
          <GlobalStyle/>
          <KanbanBoard toggleTheme={toggleTheme}/>
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
