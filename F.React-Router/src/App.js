import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:fid' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
