import {Routes, Route, useParams} from 'react-router-dom';
import './App.scss'
import Portfolio from './components/Portfolio/Porfolio';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog'
import Post from './components/Post/Post'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:slug" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
