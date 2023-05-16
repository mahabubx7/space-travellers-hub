import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Missions } from './components/Missions';
import { MyProfile } from './components/MyProfile';
import { Rockets } from './components/Rockets';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Rocket" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
