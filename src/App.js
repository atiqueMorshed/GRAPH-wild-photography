import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

const App = () => {
  return (
    <div className="App font-montserrat">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
