import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./bootstrap.min.css";
import "./App.css"
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import Productscreen from "./components/screens/Productscreen";



function App() {
  return (
    <Router>
      <Header />

      <main >
        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/product/:id" element={<Productscreen/>}  />
          </Routes>
        </Container>
      </main>

      <Footer />

    </Router>


  );
}

export default App;
