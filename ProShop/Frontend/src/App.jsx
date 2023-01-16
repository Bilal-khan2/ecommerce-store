import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import "./App.css"
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";



function App() {
  return (
    <>
      <Header />
      <main className="py-3">

       <Container>
       <HomeScreen/>
        </Container>

      </main>
      <Footer />
    </>


  );
}

export default App;
