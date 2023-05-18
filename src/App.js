import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Missions } from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import DragonsList from './components/DragonsList';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" id="pages">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Rocket" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Dragons" element={<DragonsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
