
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Assets from './Views/Assets';
import Home from './Views/Home';
import Logos from './Views/Logos';
import Timelin from './Views/Timelin';
import Users from './Views/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Assets />
      <Timelin />
      <Users />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
