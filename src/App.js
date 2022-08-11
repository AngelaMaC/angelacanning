import './index.css';
import Main from './pages/Main';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Change from './pages/Change';

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Main />
      break;
    case '/about':
      component = <About />
      break;
    case '/portfolio':
      component = <Portfolio />
      break;
    case '/change':
      component = <Change />
      break;
    default:
      component = <Main />
  }
  return (
    <div className="App">
      <Header />
      <> {component} </>
      <Footer />
    </div>
  );
}

export default App;
