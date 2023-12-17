import "./App.css";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
    <CssBaseline />
        <Container maxWidth={false} disableGutters>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
    </Container>
  </>
  );
}

export default App;
