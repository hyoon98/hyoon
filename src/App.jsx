import {Routes, Route} from 'react-router-dom';
import './App.scss'
import Portfolio from './components/Portfolio/Porfolio';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
