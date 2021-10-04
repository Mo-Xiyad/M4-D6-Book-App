/* import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import history from './data/history.json'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <BookList list={history} />
      <MyFooter />
    </div>
  );
}

export default App;
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import history from './data/history.json'
import Container from "react-bootstrap/Container";



function App() {
  return (
    <div className="App">

      <MyNavbar />
      <Home />
      <Container>
        <BookList list={history} />
      </Container>
      {/* <MyFooter /> */}
    </div>
  );
}
export default App;

