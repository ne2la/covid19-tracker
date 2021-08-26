import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Container fluid="true">
      <Header/>
      <Home/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
