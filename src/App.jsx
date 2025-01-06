import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartContext, ProfileContext } from "./views/plugin/Context";

import MainWrapper from "./layouts/MainWrapper";
//import PrivateRoute from "./layouts/PrivateRoute";

import Register from "../src/views/auth/Register";
import { useState } from "react";

function App() {
  const { cartCount, setCartCount } = useState(0);
  const [profile, setProfile] = useState([]);
  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      <ProfileContext.Provider value={[profile, setProfile]}>
        <BrowserRouter>
          <MainWrapper>
            <Routes>
              <Route path="/register/" element={<Register />} />
            </Routes>
          </MainWrapper>
        </BrowserRouter>
      </ProfileContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
