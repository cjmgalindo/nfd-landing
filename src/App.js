
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Assets from './Views/Assets';
import Home from './Views/Home';
import Logos from './Views/Logos';
import Timelin from './Views/Timelin';
import Users from './Views/Users';
import Preloader from './Views/Preloader';
import { useEffect, useState } from 'react';


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },8000);
  }, [])

  return (
    <>
    { loading &&
        <Preloader/>
      }{!loading &&
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
      }
      
    </>
  );
}

export default App;
