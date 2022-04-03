import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './COMPONENTS/Blogs/Blogs';
import Dashboard from './COMPONENTS/Dashboard/Dashboard';
import Home from './COMPONENTS/Home/Home';
import Notfound from './COMPONENTS/NotFound/Notfound';
import Reviews from './COMPONENTS/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
