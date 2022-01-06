import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
