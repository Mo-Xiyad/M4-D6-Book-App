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
import { Component } from 'react';



class App extends Component {

  state = {
    selected: null,
    query: "",
  };

  setSelectedBook = (book) => {
    this.setState({selected:book})
  }

  render() {
    
    return (
      <div className="App">

        <MyNavbar />
        <Home selectedBook={this.state.selected }/>
        <Container>
          <BookList selected={this.state.selected}
            setSelectedBook={this.setSelectedBook}
            query={this.state.query} list={history}
            onChange={(e) => this.setState({ query: e.target.value })} />
        </Container>
        {/* <MyFooter /> */}
      </div>
    );
  }
}
export default App;

