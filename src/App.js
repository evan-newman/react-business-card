import './App.css';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Info />
        <div className="App-text">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
