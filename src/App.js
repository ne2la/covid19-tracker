import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import GetData from './components/pages/GetData';

function App() {
  return (
    <>
    <Container fluid="true">
      <Header/>
      <GetData/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
