import Header from './components/Header';
import { Overview } from './components/Overview';
import ProjectsContainer from './components/Projects-Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <ProjectsContainer />
    </div>
  );
}

export default App;
