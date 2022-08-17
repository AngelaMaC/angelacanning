import Header from './Header';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Change from './pages/Change';
import Error from './pages/Error';
import Footer from './Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='change' element={<Change />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
