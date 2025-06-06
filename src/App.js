import './App.css';
import './index.css'
import Home from './pages/Home';
// import { Routes,Route } from 'react-router-dom';
// import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
    {/* <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>  */}
    <Home />
      
    </div>
  );
}

export default App;
