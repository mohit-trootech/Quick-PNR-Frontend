import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import ThemeProvider from "./providers/ThemeProvider";
import UsersProvider from "./providers/UsersProvider";
import Register from "./apps/users/Register"
import Login from "./apps/users/Login"
function App() {
  return (
    <ThemeProvider>
      <UsersProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/login/" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
