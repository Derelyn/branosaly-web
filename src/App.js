import Navbar from './components/navbar/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import About from './components/about/About'
import MyPerks from './components/myPerks/MyPerks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About />
      <MyPerks />
      <Footer />
    </div>
  );
}

export default App;
