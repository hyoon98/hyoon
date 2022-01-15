import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;
