import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Post from './component/Post/Post';
import Posts from './component/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
        <Route path=':pId' element={<Post></Post>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
