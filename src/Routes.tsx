import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './modules/Home';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
