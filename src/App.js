import logo from './logo.svg';
import './App.css';
import Movies from './components/Admin/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moviedetails from './components/Admin/Moviedetails';
import Movieedit from './components/Admin/Movieedit';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/movies' element={<Movies method='post'/>}></Route>
      <Route path='/moviedetails' element={<Moviedetails method='post'/>}></Route>
      <Route path='/movieedit' element={<Movieedit method='post'/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
