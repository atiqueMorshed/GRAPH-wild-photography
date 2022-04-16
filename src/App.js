import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

const App = () => {
  return (
    <div className="App font-montserrat">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
