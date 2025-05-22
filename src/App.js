import ThemeToggle from './components/ThemeToggle';
import DragDrop from './components/DragDrop';
import UserDetailsForm from './components/UserDetailsForm';
import SearchWithDebounce from './components/searchFunctionality/SearchWithDebounce';
import TodoApp from './components/ToDo';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <ThemeToggle />
        <hr />
        <DragDrop />
        <hr />
        <UserDetailsForm />
        <hr />
        <SearchWithDebounce />
        <hr />
        <TodoApp />
      </div>
    </ThemeProvider>
  );
};

export default App;