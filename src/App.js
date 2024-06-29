import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Home from './components/homepage';
import Demo from './components/detect';

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/detect" element={<Demo />} />
          </Routes>
        </div>
        </Router>
      </MantineProvider>
  );
}

export default App;