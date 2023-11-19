import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Magic from "./components/Magic";
import Testomonial from "./components/Testomonial";
import Followers from "./components/Followers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        {/* LOGIN */}
        <Route
          path="Login"
          element={
            <>
              <Login />
            </>
          }
        />

        {/* Magic */}
        <Route
          path="Magic"
          element={
            <>
              <Header />
              <Magic />
              <br />
              <Followers />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
