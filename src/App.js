import Navbar from './components/navbar/Navbar'
import Frontpage from './components/Frontpage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet"></link>
      <Navbar />
      <Frontpage />
      <Footer />
    </div>
  );
}

export default App;
