
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './componets/Navbar';
 import Home from './componets/Home';



function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;