import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { switchRoute } from './config/routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>{switchRoute}</Routes>
      </Router>
    </div>
  );
}

export default App;
