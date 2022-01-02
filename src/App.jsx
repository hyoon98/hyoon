import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections" style={{position:'relative', top:'70px'}}>
        <Intro/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
