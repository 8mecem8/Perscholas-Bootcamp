
import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './Components/StarshipList/StarshipList'
import SsDetails from './Components/StarshipPage/StarshipPage'


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<StarshipList />}/>
        <Route path="/starships" element={<SsDetails/>} />
      </Routes>
    </>
  );
}

export default App;
