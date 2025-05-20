import ThemeToggle from './components/ThemeToggle';
import DragDrop from './components/DragDrop';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <ThemeToggle />
        <hr />
        <DragDrop />
      </div>
    </ThemeProvider>
  );
};

export default App;